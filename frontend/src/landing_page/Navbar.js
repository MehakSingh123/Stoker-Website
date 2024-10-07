import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import your CSS styles

function Navbar({ isAuthenticated,  setIsAuthenticated}) {
  const navigate = useNavigate(); // To redirect after logout

  // Logout function
  const userLogout = async () => {
    try {
      // Make a POST request to your backend logout route
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });

      // Remove the token from cookies
      Cookies.remove('token');

      // Update the login state
      setIsAuthenticated(false); // Notify parent component that the user is logged out

      // Redirect the user to the homepage
      navigate('/');
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top p-3" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo 1.42.05 PM.svg"
            style={{ width: "20%", marginLeft: "17%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Conditionally render links based on login status */}
            {isAuthenticated ? (
              <>
                {/* Render Logout link when the user is logged in */}
                <li className="nav-item">
                  <button onClick={userLogout} className="btn btn-danger">Logout</button>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="http://localhost:3001/">Dashboard</Link>
                </li>
              </>
            ) : (
              <>
                {/* Render Signup and Login links when the user is logged out */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
              </>
            )}
            {/* These links are always visible */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
