const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./conflig/db').Database;

//database connection

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => {
        console.log('Database Connection Successfull')
    })
    .catch((err) => {
        console.log('Uneble to connect with the database', err)
    });

// Defining the port

const port = process.env.PORT || 3000;

//Initialize cors Middleware
app.use(cors());

//Initialize body-parser Middleware
app.use(bodyParse.json());

app.get('/', (res, req) => {
    res.send('<h1>Hello world</h1>')
});

app.listen(port, () => {
    console.log('Server started on port', port)
});