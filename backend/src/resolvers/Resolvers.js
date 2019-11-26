const User = require('../models/User');
const Plan = require('../models/Plan');
const Subscription = require('../models/Subscription');

module.exports = {
    Subscription: {
        user: (obj, args) => User.findById(obj.user),
        plan: (obj, args) => Plan.findById(obj.plan)
    },
    
    Query: {
        users: () => User.find(),
        user: (_,{id}) => User.findById(id),

        plans: () => Plan.find(),
        plan: (_,{id}) => Plan.findById(id),

        subscriptions: () => Subscription.find(),
        subscription: (_,{id}) => Subscription.findById(id),
    },

    Mutation:{
        createUser: (_,{name, email, phone, age}) => User.create({name, email, phone, age}),

        updateUser: (_,{id , name, email, phone, age}) => User.findOneAndUpdate(id, {name, email, phone, age}),
        
        createPlan: (_,{slug, price}) => Plan.create({slug, price}),

        createSubscription: (_,{user, plan, status, price}) => Subscription.create({user, plan, status, price})
    }   
}