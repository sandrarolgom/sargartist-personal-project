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
});

async function connectDB(){
    const connection = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
    });
    connection.connect();
    return connection;
};

api.get("/illustrations", async(req, res)=>{
    try {
        const conex = await connectDB();
        const sql = "SELECT * FROM illustrations";
        const [result] = await conex.query(sql);
        res.status(200).json({
            success: true,
            response: result
        });
    } catch (error) {
        res.status(500).send({
            success:false,
            error: "An error occurred while fetching illustrations."
        });
    } 
});