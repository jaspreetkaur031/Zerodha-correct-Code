require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // <-- Security fix: Import bcryptjs

// --- Import Models ---
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const UserModel = require('./model/UserModel'); 

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json()); 

// --- Stock Routes ---

app.get('/allHoldings', async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ message: "Server error fetching holdings" });
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ message: "Server error fetching positions" });
  }
});

// --- THIS IS THE NEW ROUTE YOU NEED ---
// This route fetches all orders to display on your Orders page
app.get('/allOrders', async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Server error fetching orders" });
  }
});
// ------------------------------------

// This route already supports both BUY and SELL
app.post('/newOrder', async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode, // Receives "BUY" or "SELL" from the frontend
    });
    await newOrder.save(); 
    res.status(201).json({ message: "Order saved!", order: newOrder });
  } catch (error) {
    console.error("Error saving new order:", error);
    res.status(500).json({ message: "Server error saving order" });
  }
});

// --- Auth Routes (with Security Fix) ---

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists with that email" });
    }

    user = new UserModel({
      name,
      email,
      password, // This will be replaced by the hash
    });

    // <-- Security fix: Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save(); 
    res.status(201).json({ message: "User registered successfully", userId: user.id });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // <-- Security fix: Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ 
      message: "Login successful",
      userId: user.id,
      name: user.name
    });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(Data_Fetching_for_Dashboard_Components.md.bin).json({ message: "Server error during login" });
  }
});

// --- Start Server ---
const startServer = async () => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected!");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
