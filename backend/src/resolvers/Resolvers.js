const User = require('../models/User');
const Plan = require('../models/Plan');
const Subsctiption = require('../models/Subscription');

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_,{id}) => User.findById(id),

        plans: () => Plan.find(),
        plan: (_,{id}) => Plan.findById(id),

        subscriptions: () => Subsctiption.find(),
        subscription: (_,{id}) => Subsctiption.findById(id),
    },

    Mutation:{
        createUser: (_,{name,email}) => User.create({name, email}),
        
        createPlan: (_,{slug, price}) => Plan.create({slug, price}),

        createSubscription: (_,{user_id, plan_id, status, price}) => Subscription.create({user_id, plan_id, status, price})
    }
}