const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "myform",
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = `INSERT INTO register (username, email, password ) VALUES (?, ?, ?)`;
    const data = [username, email, password ];

    db.query(sql, data, (err, results) => {
        if(!results) {
            res.json({message: 'User already registered'});
        }
        else if (err) {
            console.log(err);
            res.status(500).json({ message: 'Error registering User' });
        } else {
            res.json({ message: 'User registered successfully' });
        }
    });
});

app.post('/login', (req, res) => {

    User.findOne({username: req.body.username})

    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM register WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong Username or Password" });
            }

        });
});

app.listen(4000, () => {
    console.log("Server is running")
})