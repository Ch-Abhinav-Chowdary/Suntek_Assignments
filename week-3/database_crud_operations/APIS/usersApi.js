import express from 'express';
import { UserModel } from '../models/userSchema.js';
import { hash, compare } from 'bcryptjs'
import { verifyToken } from '../middleware/verifyToken.js';
import jwt from 'jsonwebtoken';

export const userApp = express.Router();

// USER API ROUTES


//Create User
userApp.post('/user', async(req, res)=>{
    //get new user from req
    let newUser = req.body;
    //hash the password
    let hashedPassword = await hash(newUser.password, 7);
    //replace the original password with hashed password
    newUser.password = hashedPassword;
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


//User Authentication Route
userApp.post('/auth', async (req, res)=>{
    //get user credentials object
    let { username, password } = req.body;

    //check for username
    let userOfDb = await UserModel.findOne({ username: username });
    //if user not found

    if(userOfDb === null) {
        return res.status(404).json({ message: "Invalid Username" });
    }

    //compare password
    let status = await compare(password, userOfDb.password);
    //if passwords not match
    if(status === false) return res.status(401).json({ message: "Invalid Password" });

    //create signed token
    let signedUser = jwt.sign({username: username}, "secretkey", { expiresIn: 20 });

    //save the token as httpOnly cookie
    res.cookie("token", signedUser, { httpOnly: true,
        secure: false, //set to true if using https
        sameSite: 'lax'
     });

    //send response
    res.status(200).json({ message: "User authenticated successfully"});
});


//test route
userApp.get('/test', verifyToken, (req, res)=>{
    res.json({ message: "Test route" });
});


/* 

I have used thunderClient to test the API endpoints.

*/