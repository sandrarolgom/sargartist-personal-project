const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const api = express();
api.use(cors());
api.use(express.json({limit:"100mb"}));
const port = process.env.PORT;
api.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`); 
})