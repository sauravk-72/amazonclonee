require("dotenv").config();
const express= require("express");
const app= express();
const mongoose=require("mongoose");
require("./db/conn");
const Router = require("./routes/Router");
const cookieParser =require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors =require("cors");


const Products=require("./models/Productsschema");

const DefaultData=require("./DefaultData");

const port = process.env.PORT || 80;



app.use(express.json());
app.use(cors());
app.use(Router);
app.use(cookieParser());



app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
});
DefaultData();