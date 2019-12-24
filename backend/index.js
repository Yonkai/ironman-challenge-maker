// require('dotenv').config({path:'.env'})
// const createServer = require('./createServer')
// const db = require('../database')

// const server = createServer()

// //TODO use express mw to handle cookies
// //TODO use express mw to pop. current user

// server.start({
//   cors:{
//     credientals:true,
//     origin:process.env.FRONTEND_URL,
//   }
// }, deets =>{
//   console.log(`Server is now running on port http://localhost:${deets.port}`)
// })
//dddddd
require('dotenv').config({path:'.env'})
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Query')
const Query = require('./resolvers/Mutation') 

const typeDefs = './schema.graphql'
const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({ 
  typeDefs:'./schema.graphql', 
  resolvers:{
    Mutation,
    Query
  },
  resolverValidationOptions: {
      requireResolversForResolveType:false
  },
  context: req => ({ ...req, db })
})

server.start({
  cors:{
    credientals:true,
    origin:process.env.FRONTEND_URL,
  }
}, deets =>{
  console.log(`Server is now running on port http://localhost:${deets.port}`)
})