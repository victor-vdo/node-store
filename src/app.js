'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017');

// Load Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Load Routes
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/products-route');
const customerRoutes = require('./routes/customer-route');
const orderRoutes = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

module.exports = app;