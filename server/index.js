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

pool.query(`select * from loginsystem.user`, (err, res)=>{
    return console.log(res)
});

app.post('/register', (req,res)=> {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO user (username, password) VALUES (?,?)", [username, password], (err, result) => {
        console.log(err);
    }
    );
})

app.listen(3001, () => {
    console.log("running server");
})