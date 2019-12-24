//Connects to remote prisma DB and gives us the abilitiy
// to query it with javascript.
const { Prisma } = require('prisma-binding')

const db = new Prisma({
    typeDefs: './src/generated/prisma-schema',
    endpoint:process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug:false
})

module.exports = db