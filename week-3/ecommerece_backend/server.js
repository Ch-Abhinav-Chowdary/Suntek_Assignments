import express from 'express';
import { connect } from 'mongoose';
import { userApp } from './APIS/userAPI.js';
import { productApp } from './APIS/productAPI.js';

const app = express();
const port = 3000;


//create http server

//1. Database connectivity
async function connection() {
    try {
        await connect('mongodb://localhost:27017/ecommerceDB');
        console.log("Connected to database");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch(err) {
        console.log("Error connecting to DB: ", err.message);
    }
}

connection();

// Use body parser middleware
app.use(express.json());

// forward req to specific apis
app.use('/user-api', userApp);
app.use('/product-api', productApp);

//error handling middleware
app.use((err, req, res, next)=>{
    res.send({message: err.message});
})