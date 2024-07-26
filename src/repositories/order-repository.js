'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Order
        .findById(id);
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}
