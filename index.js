const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'dbname'
});

connection.connect(err => err ? console.log(err) : console.log('Connected to database'));


app.get('/', (req, res) => {
    res.send('Working');
});

app.listen(4000, () => console.log('Listening on 4000'));