require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const authRoute = require("./Routes/AuthRoute");
const User = require("./model/UserModel");
const app = express();

// Allowed origins for CORS
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin ${origin} not allowed`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, etc.)
}));

// Session Configuration
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week expiration
    maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    httpOnly: true, // Ensure cookies are only accessible via HTTP(S), not client-side JavaScript
  },
};

app.use(session(sessionOptions));

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", authRoute);

// POST /newOrder Endpoint - Placing a new order with validation
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    let userId;
    const token = req.cookies.token;
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      console.log(data.id)
      userId = data.id;
  });
  console.log("User is :",userId);
    // Get the user ID from session
    

    // Validate input
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (qty <= 0 || price <= 0) {
      return res.status(400).json({ message: "Quantity and price must be positive" });
    }

    // Create a new order with userId
    let newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
       user:userId // Store the user ID in the order
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully",newOrder });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// GET /allHoldings Endpoint - Fetch all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).send("Failed to fetch holdings.");
  }
});

// GET /allPositions Endpoint - Fetch all positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).send("Failed to fetch positions.");
  }
});

// GET /allOrders Endpoint - Fetch orders for the authenticated user
app.get("/allOrders", async (req, res) => {
  try {
    let userId;
    const token = req.cookies.token;
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      console.log(data.id)
      userId = data.id;  
    });
    // Get the user ID from session
    let userOrders = await OrdersModel.find({user:userId}); // Fetch orders for the specific user
    res.json(userOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).send("Failed to fetch orders.");
  }
});

// POST /logout Endpoint - Handle user logout
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout failed:", err);
      return res.status(500).json({ message: "Logout failed" });
    }

    res.clearCookie('connect.sid', { path: '/' }); // Clear session cookie
    res.status(200).json({ message: "Logged out successfully" });
  });
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
});
