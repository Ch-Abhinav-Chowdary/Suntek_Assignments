import express from 'express';
export const userApp = express.Router();

let users = [];

// CRUD Operations

// Read - Get all users
userApp.get('/users', (req, res)=>{
    res.status(200).json({"message": "List of users", payload: users});
});


// Create - Add a new user
userApp.post('/user', (req, res)=>{
    let newUser = req.body;
    console.log(newUser);
    users.push(newUser);
    res.status(201).json({"message": "User created successfully", payload: newUser});
})


// Update - Update an existing user
userApp.put('/user/:id', (req, res)=>{
    let userId = req.params.id;
    let updatedUser = req.body;

    users = users.map(user => user.id == userId ? updatedUser : user);
    res.status(200).json({"message": "User updated successfully", payload: updatedUser});
})


// Delete - Remove a user
userApp.get('/user/:id', (req, res)=>{
    let userId = req.params.id;
    let foundUser = users.find(user => user.id == userId);
    res.status(200).json({"message": "User details", payload: foundUser});
});


// Delete - Remove a user
userApp.delete('/user/:id', (req, res)=>{
    let userId = req.params.id;
    users = users.filter(user => user.id != userId);
    res.status(200).json({"message": "User deleted successfully"});
});

/* 

I have used ThunderClient to test the API endpoints.

*/