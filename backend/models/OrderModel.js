const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },
    orderItems: [{
        name: {
            type: String,
            require: true,
        },
        qty: {
            type: Number,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: ' Product'
        }
    }],
    shippingAddress: {
        address: {
            type: String,
            require: true,
        },
        city: {
            type: String,
            require: true,
        },
        postalCode: {
            type: Number,
            require: true,
        },
        state: {
            type: String,
            require: true,
        },
    },
    payment: {
        type: String,
        require: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String }
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0
    },
    ispaid: {
        type: Boolean,
        require: true,
        default: false
    },
    paidAt: {
        type: Date,
    },
    isDelevired: {
        type: Boolean,
        require: true,
        default: false
    },
    DeleviredAt: {
        type: Date,
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;