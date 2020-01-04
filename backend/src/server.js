const { GraphQLServer } = require('graphql-yoga');

const path = require('path');

const resolvers = require('./resolvers/Resolvers');

require('dotenv/config');

const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGOOSE_STRING_CONNECTION,
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