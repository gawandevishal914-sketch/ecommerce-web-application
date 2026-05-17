const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    productName: String,

    price: Number,

    status: {
        type: String,
        default: "Pending"
    }

});

module.exports = mongoose.model("Order", orderSchema);