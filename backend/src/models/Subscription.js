const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref:'User'},
    plan: {type: mongoose.Schema.Types.ObjectId,ref:'Plan'},
    status: String,
    price: Number
});

module.exports = mongoose.model('Subscription', SubscriptionSchema); 