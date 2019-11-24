const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    plan_id: mongoose.Schema.Types.ObjectId,
    status: String,
    price: Number
});

module.exports = mongoose.model('Subscription', SubscriptionSchema); 