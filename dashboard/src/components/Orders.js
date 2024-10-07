import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to handle cookies

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchOrders = async () => {
      try {
        const token = Cookies.get("token"); // Ensure token is retrieved from cookies
        if (!token) {
          setError("You are not logged in. Please log in to view your orders.");
          return;
        }

        const response = await axios.get("http://localhost:3002/allOrders", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
          withCredentials: true, // Ensure cookies are sent with the request
        });

        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        if (error.response && error.response.status === 401) {
          setError("You are not authorized to view the orders. Please log in.");
        } else {
          setError("Failed to fetch orders. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-list">
      <h2>Your Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>Stock: {order.name}</p>
            <p>Quantity: {order.qty}</p>
            <p>Price: {order.price}</p>
            <p>Mode: {order.mode}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
