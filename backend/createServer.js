const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Query')
const Query = require('./resolvers/Mutation') 
const db = require('./database')

//Create the GraphQL Yoga Server

function createServer(){
    return new GraphQLServer({
        typeDefs:'./schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType:false
        },
        context: req => ({ ...req, db })
    })
}

module.exports = createServer