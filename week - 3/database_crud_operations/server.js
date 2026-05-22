
//Imports 
import express from 'express';
import { userApp } from './APIS/usersApi.js';
import { connect } from "mongoose";
import { productApp } from './APIS/productsAPI.js';
import cookieParser from "cookie-parser"
import helmet from 'helmet';

//variables declaration
const app = express();
const port = 8000;


//database connectivity

async function connection() {
    try {
        await connect("mongodb://localhost:27017/userdb");
        console.log("Database connectivity successful");

        // The server will start listening only after DB connection is successful
        app.listen(port, ()=>{
            console.log("The server is running at the port 8000");
        });
    } catch(err) {
        console.log("Error connecting to DB: ", err.message);
    }
}

connection();

// Middleware section
app.use(express.json());
app.use(cookieParser());
app.use(helmet())

app.use('/user-api', userApp);
app.use('/product-api', productApp);

//Error Handling code

/* app.use((err, req, res, next)={
    res.json({ message: "error", error: err.message })
}) */