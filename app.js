import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Product routes
app.use("/products", productRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});