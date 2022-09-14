const express = require('express');
const app = express();
const cors = require("cors");

const mysql = require('mysql2')

app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: 'Composer0',
    host: 'localhost',
    port: '4274',
    password: 'Desp0liation-S0ng',
    database: 'userdatabase'
})


// app.get("/select", (req, res) => {

//     db.query(
//         'SELECT * FROM user', (err, result) => {
//         if (err) {
            
//             console.log(err)
//         }
//         res.send(result)
//     })
// })


app.post('/register', (req, res) => {

    const userName = req.body.username
    const passWord = req.body.password
    // const id = 9


    db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)', [userName, passWord], (err, result) => {
            console.log(err)
        }
    )
})

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?", 
            [username, password],
            (err, result) => {
                if(err) {
                    res.send({err: err});
                }  
                
                if (result.length > 0) {
                        res.send(result)
                    } else {
                        res.send({message: "Wrong username/password combination."});
                    }
                } 
    )
})

app.listen(3001, () => {
    console.log('yo! your server runnin')
});