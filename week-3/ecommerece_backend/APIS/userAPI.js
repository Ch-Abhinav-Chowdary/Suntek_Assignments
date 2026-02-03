import express from 'express';
import { hash } from 'bcryptjs'
import { UserModel } from '../models/UserModel.js';
import { ProductModel } from '../models/ProductModel.js'

export const userApp = express.Router();


// USER API ROUTES

//get all users
userApp.get('/users',(req, res)=>{
    res.json({message: "Hello world"});
})

//create a new user
userApp.post('/users',async(req, res)=>{
    let user = req.body;

    try {
        await new UserModel(user).validate();
    } catch (err) {
        return res.status(400).json({ message: "Validation error", error: err.message });
    }

    let hashedPassword = await hash(user.password, 12);
    user.password = hashedPassword;

    let userDoc = await UserModel(user);
    userDoc.save(validateBeforeSave=false);

    res.send({message: "User has created successfully", payload: userDoc});
})


//Using put rqeust handler
userApp.put('/user-cart/:id/:pid', async (req, res)=>{
    //Read user-id or product-id from url parameters
    let {id, pid} = req.params;

    //Check user
    let user = await UserModel.findById(id);

    if(!user) return res.status(401).json({ message: "User not found" });

    //Check product

    let product = ProductModel.findById(pid);
    if(!product) return res.status(401).json({ "message": "Product not found" });

    //find the product 
    let dbUser = await UserModel.findOne({_id: id}, {cart: {$elemMatch: {product: pid}}}).populate('cart.product');
    
    if(dbUser.cart.length > 0) {
        //product is already in cart, update the quantity
        dbUser.cart[0].quantity += 1;
        await dbUser.save();
        return res.send({ message: "The item quantity has been updated in the cart", payload: dbUser });
    }
    //if the product is not present in the cart just add it to the cart
    let updatedUser = await UserModel.findByIdAndUpdate(id, {$push: {cart: { product: pid, quantity: 1 }}}, {new: true}).populate('cart.product');

    res.json({ message: "The item has successfully added to cart", payload: updatedUser});
})


//Get user's personal cart
userApp.get('/:id', async(req, res)=>{
    let id = req.params.id;
    let user = await UserModel.findById(id).populate('cart.product', 'name price');
    res.json({ message: "User cart details", payload: user });
});