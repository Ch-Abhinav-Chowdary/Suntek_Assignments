import express from 'express';
const app = express();
import { userApp } from './api/users.js';



const port = 8000;
app.use(express.json());
app.use('/user-api', userApp);

app.listen(port, ()=>{
    console.log("The server is running at the port 8000");
});