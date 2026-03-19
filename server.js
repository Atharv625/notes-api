const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

// ✅ SIMPLE CORS (works 100%)
app.use(cors());

app.use(express.json());

// routes
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// root route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});