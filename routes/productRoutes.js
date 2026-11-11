import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();



// to get all of the productss
router.get("/", getAllProducts); // "/"  means take whatever base path which is specified in appjs

// to get products by id
router.get("/:id", getProductById);

// to creta a produc
router.post("/", createProduct);

// to update a product 
router.put("/:id", updateProduct);

// to removee a prod
router.delete("/:id", deleteProduct);

export default router;

// n.b product routes decides what func to call, controller decides what the functions do