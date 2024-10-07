import React, { useState, useContext } from "react"; // Add useContext
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContextProvider"; // Assuming this exports the context

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext); // Use useContext to access GeneralContext

  const handleBuyClick = () => {
    if (!stockQuantity || !stockPrice || stockQuantity <= 0 || stockPrice <= 0) {
      alert("Please enter valid stock quantity and price.");
      return;
    }
    axios.post(
      "http://localhost:3002/newOrder",
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
      { withCredentials: true }
    );

    generalContext.closeBuyWindow(); // Use the method from the context
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow(); // Use the method from the context
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
