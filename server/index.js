const express = require("express");

const app = express();

app.use(express.json());

const {createPool} = require('mysql2');

const pool = createPool ({
    host: "127.0.0.1",
    port: "4274",
    user: "Composer0",
    password: "Desp0liation-S0ng",
    connectionLimit: 10
});

pool.query(`select * from loginsystem.loginsystem`, (err, res)=>{
    return console.log(res)
});