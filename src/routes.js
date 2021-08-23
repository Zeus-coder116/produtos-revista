const express = require('express');

const produtos = require('./controllers/produtos');


const routes = express.Router();


routes.get('/produtos/:codigo/',produtos.listAllProducts);


module.exports = routes;
