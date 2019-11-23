const { GraphQLServer } = require('graphql-yoga');

const path = require('path');

const resolvers = require('./resolvers');

const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://root:example@localhost?authMechanism=DEFAULT",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then( () => {

    console.log("Connected to Database");
    
}).catch((err) => {

    console.log("Not Connected to Database ERROR! ", err);

});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, '../schema/schema.graphql'),
    resolvers
});

server.start();