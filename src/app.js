'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

// Load Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Load Routes
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/products-route');
const customerRoutes = require('./routes/customer-route');
const orderRoutes = require('./routes/order-route');


app.use(bodyParse.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
     extended: false 
}));

// liberação de CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Orign', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, x-access-token' );
    res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, OPTIONS' );
    next();
});

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

module.exports = app;