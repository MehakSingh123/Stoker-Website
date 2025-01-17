const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const express = require("express");
const session = require("express-session");
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    req.session.userId = user._id;
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.cookie('userId',user._id);
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password", success: false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password", success: false });
    }
    const token = createSecretToken(user._id);
    req.session.userId = user._id;
    res.cookie("userId",user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    
    res.status(200).json({ message: "User logged in successfully", success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

  module.exports.Logout = async (req, res) => {
    try {
      // Clear the 'token' cookie
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only set secure in production with HTTPS
        sameSite: 'strict', // Controls if your cookies are sent with cross-site requests
      });
      res.status(200).json({ message: "User logged out successfully", success: true });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  