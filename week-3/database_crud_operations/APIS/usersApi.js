import express from 'express';
import { UserModel } from '../models/userSchema.js';
export const userApp = express.Router();


// USER API ROUTES


//Create User
userApp.post('/user', async(req, res)=>{
    //get new user from req
    let newUser = req.body;
    //Create new user document 
    let newUserDoc = new UserModel(newUser);
    //save to DB
    await newUserDoc.save();
    //send response
    res.status(201).json({"message": "User created successfully", payload: newUserDoc});
})

//Read Users
userApp.get('/users',async (req, res)=>{
    let users = await UserModel.find();
    //send response

    res.status(200).json({"message": "List of users", payload: users}); 
});


//Read user by ObjectId
userApp.get('/users/:id',async(req, res)=>{
    //get objectId from URL parameter
    let objId = req.params.id;
    //find user in Database
    let userObj = await UserModel.findById(objId);
    //send response
    res.status(200).json({"message": "User found", payload: userObj});
})


//Update user by ObjectId
userApp.put('users/:id', async(req, res)=>{
    //get objectId from URL parameter
    let objId = req.params.id;
    //Get modified user data from req body
    let modifiedUser = req.body;
    //make update
    let latestUser = await UserModel.findByIdAndUpdate(objId, {$set: {...modifiedUser}}, {new: true});
    //send response 
    res.status(200).json({"message": "user modified", payload: latestUser});
});


//Delete User
userApp.delete('/users/:id', async(req, res)=>{
    // Extracting objId from req parameters
    let objId = req.params.id;

    //delete the user with the _id as objId
    let deletedObj = await UserModel.findByIdAndDelete(objId);

    //send response
    res.status(200).send({ "message": "User deleted successfully" , payload: deletedObj});
})


/* 

I have used thunderClient to test the API endpoints.

*/