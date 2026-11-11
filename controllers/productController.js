import { products } from "../data/products.js";

// retrieve all of the prodctts
export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};



// get profduct by id
export const getProductById = (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
};




// create a product
export const createProduct = (req, res) => {
  const { name, price, quantity, category } = req.body;

  if ( typeof name !== "string" || !name.trim() || typeof price !== "number" || !Number.isFinite(price) || price <= 0 ||typeof quantity !== "number" 
       ||!Number.isInteger(quantity) || quantity < 0 || typeof category !== "string" || !category.trim()
  ) {
    return res.status(400).json({ message: "Validation failed" });
  }

  const newId = products.length
    ? Math.max(...products.map((product) => product.id)) + 1
    : 1;

  const newProduct = {
    id: newId,
    name: name.trim(),
    price,
    quantity,
    category: category.trim(),
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};





// updateeeee the product
export const updateProduct = (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((item) => item.id === id);

  if (index === -1) { // if teh index doesn't exist it returns -1
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, price, quantity, category } = req.body;

  if ( typeof name !== "string" || !name.trim() || typeof price !== "number" || !Number.isFinite(price) || price <= 0 || typeof quantity !== "number" 
    || !Number.isInteger(quantity) || quantity < 0 || typeof category !== "string" || !category.trim()
  ) {
    return res.status(400).json({ message: "Validation failed" });
  }

  products[index] = {
    id,
    name: name.trim(),
    price,
    quantity,
    category: category.trim(),
  };

  res.status(200).json(products[index]);
};





// deleting the product
export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  const index = products.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted successfully",
  });
};