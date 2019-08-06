const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const server = express();

//GET, POST, PUT, DELETE
mongoose.connect('mongodb+srv://tindev:tindev@cluster0-neh7t.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);

// M - Model, V - View, C - Controller