//const bodyParse = require('body-parse');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

module.exports = () => {
    //Iniciando o APP
    const app = express();
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(cors());

    //Iniciando o DB
    mongoose.connect(
        'mongodb://localhost:27017/nodeapi',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    requireDir('../models');

    //const Product = mongoose.model('Product');

    //Primeira rota
    app.use('/api', require("../controllers/routes"));

    return app;
}