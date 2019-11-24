const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    slug: String,
    price: Number
});

module.exports = mongoose.model('Plan', PlanSchema); 