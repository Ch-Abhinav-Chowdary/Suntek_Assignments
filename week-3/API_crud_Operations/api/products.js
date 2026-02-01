import e from "express";
export const productApp = e.Router();

let products = [];

// CRUD Operations

// Read - Get all products
productApp.get('/products', (req, res)=>{
    res.status(200).json({"message": "List of products", payload: products});
});

// Create - Add a new product
productApp.post('/product', (req, res)=>{
    let newProduct = req.body;
    console.log(newProduct);
    products.push(newProduct);
    res.status(201).json({"message": "Product created successfully", payload: newProduct});
});

// Update - Update an existing product
productApp.put('/product/:id', (req, res)=>{
    let productId = req.params.id;
    let updatedProduct = req.body;
    products = products.map(product => product.id == productId ? updatedProduct : product);
    res.status(200).json({"message": "Product updated successfully", payload: updatedProduct});
});

// Read - Get a product by ID
productApp.get('/product/:id', (req, res)=>{
    let productId = req.params.id;
    let foundProduct = products.find(product => product.id == productId);
    res.status(200).json({"message": "Product details", payload: foundProduct});
});

// Delete - Remove a product
productApp.delete('/product/:id', (req, res)=>{
    let productId = req.params.id;
    products = products.filter(product => product.id != productId);
    res.status(200).json({"message": "Product deleted successfully"});
});