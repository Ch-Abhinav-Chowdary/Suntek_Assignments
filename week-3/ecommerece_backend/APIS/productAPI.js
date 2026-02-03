import express from "express";
import { ProductModel } from "../models/ProductModel.js";

export const productApp = express.Router();

//add new product
productApp.post('/products', async(req, res)=>{

    //get product data from req body
    let product = req.body;

    //create product document
    let productDoc = ProductModel(product);

    //store product document in database
    productDoc.save();


    //send response
    res.json({message: "Product document has successfully created", payload: productDoc});
});


//get all products
productApp.get('/products',async(req, res)=>{

    //find all products
    let products = await ProductModel.find();

    //send response
    res.json({message: "ALl products", payload: products});
});


//update a product
productApp.put('/products/:id',async(req, res)=>{
    //get product id from req params
    let id = req.params.id;

    //retrieve the new product body
    let product = req.body;


    //find the product in the database and update it
    let updatedProduct = await ProductModel.findByIdAndUpdate(id, {$set: {...product}}, {new: true});

    //send the response
    res.json({ message: "Product has updated successfully", payload: updatedProduct });
})


//delete the product 

productApp.delete('/products/:id', async(req, res)=>{
    //get product id from req params
    let id = req.params.id;

    //find the product and delete it from database
    let deletedProduct = await ProductModel.findByIdAndDelete(id);

    //send response
    res.json({ message: "product deleted successfully", payload: deletedProduct });
})