import express from "express";
import { ProductModel } from "../models/productSchema.js";

export const productApp = express.Router();

//Product API Routes



//Create New Product
productApp.post('/products', async(req, res)=>{
    //Extract product data from req body
    let productObj = req.body;

    //convert product object into product document
    let newProductObj = new ProductModel(productObj);

    //Insert the product object into database
    newProductObj.save();

    //send response
    res.send({message: "The product Added to the inventory", payload: newProductObj});
});


//Get all products
productApp.get('/products', async(req, res)=>{
    //retrieve all products from database
    let data = await ProductModel.find();

    //send response
    res.send({ message: "All Products", payload: data });
});


//Get product by ID
productApp.get('/products/:id', async(req, res)=>{
    //extract id from req params
    let id = req.params.id;

    //find the product which has the _id equals to id
    let productObj = await ProductModel.findById(id);

    //send response
    res.send({ message: "Product FOund", payload: productObj });
})

//Modify user by ID
productApp.put('/products/:id', async(req, res)=>{
    //retrieve id from req params
    let id = req.params.id;

    //checkinf whether the id has properly came or not
    console.log(id)

    //retrieve modified product data from req body
    let modifiedProduct = req.body;

    
    let latestProduct = await ProductModel.findByIdAndUpdate(id, {$set: {...modifiedProduct}}, {new: true});

    res.send({ message: "Product modified successfully", payload: latestProduct });
})


//Delete product by ID
productApp.delete('/products/:id', async(req, res)=>{
    //retrieve id from req params
    let id = req.params.id;

    //deleting the product from database
    await ProductModel.findByIdAndDelete(id);
    res.send({ message: "Product deleted successfully" });
});
