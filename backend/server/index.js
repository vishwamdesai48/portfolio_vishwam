const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  emailOrPhone: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", ContactSchema);

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
