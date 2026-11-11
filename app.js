// bu applikasyonumuzun entry point oluyo
// bunun yapacaklari listesi:
// expressimizi hazirliyo
// routlari bağlıyo
// configures middleware
// starts the serverres 




import express from "express"; //install ettiğimiz express import ediyo
import productRoutes from "./routes/productRoutes.js"; // diğer filedeki routlerı import ediyo

const app = express(); //creating an express appn and storıng ıt ın app

const PORT = 3000;

// Middleware
app.use(express.json());

// Product routes
app.use("/products", productRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" }); // sends json response containing the error message
});

// ts is usd to start thee server
app.listen(PORT, () => { //starts the server and makes it liosten for incoming requests
  console.log(`Server running at http://localhost:${PORT}`);
});  

