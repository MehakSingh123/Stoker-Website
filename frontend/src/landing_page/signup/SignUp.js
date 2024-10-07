import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./signup.css"; // Import the updated CSS

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection after signup

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const signupResponse = await axios.post("http://localhost:3002/signup", formData);
      if (signupResponse.data.success) {
        setMessage("Signup successful!");

        const loginResponse = await axios.post("http://localhost:3002/login", {
          email: formData.email,
          password: formData.password,
        });

        if (loginResponse.data.success) {
          Cookies.set("token", loginResponse.data.token);
          navigate("/"); // Redirect to home page
        } else {
          setError(loginResponse.data.message);
        }
      } else {
        setError(signupResponse.data.message);
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="signup-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          className="signup-input"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <p className="redirect-text">Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignUp;
