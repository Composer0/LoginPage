const express = require('express');
const app = express();

const mysql = require('mysql2')

const db = mysql.createConnection({
    user: 'Composer0',
    host: 'localhost',
    port: '4274',
    password: 'Desp0liation-S0ng',
    database: 'loginsystem'
})


app.get("/select", (req, res) => {

    db.query(
        'SELECT * FROM user', (err, result) => {
        if (err) {
            
            console.log(err)
        }
        res.send(result)
    })
})


app.post('/insert', (req, res) => {

    const userName = "Cool"
    const passWord = "Yay"
    const id = 8


    db.query(
        'INSERT INTO user (id, username, password) VALUES (?, ?, ?)', [id, userName, passWord], (err, result) => {
        if (err) {
            
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('yo! your server runnin')
});