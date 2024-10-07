import React, { useState,useEffect } from "react";
import Cookies from 'js-cookie';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './home/HomePage';
import Signup from "./signup/SignUp";
import AboutPage from "./about/AboutPage";
import ProductPage from "./products/ProductsPage";
import PricingPage from "./pricing/PricingPage";
import SupportPage from "./support/SupportPage";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login"; // Adjust import based on your file structure
 // Import your Navbar

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = Cookies.get('token'); // Read the cookie
    if (token) {
      setIsAuthenticated(true); // Set authenticated state if token exists
    }
  }, []);
  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      
 
      
      
    </Router>
  );
}

export default App;
