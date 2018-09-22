const graphql = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./schema.gql')
const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({ typeDefs, resolvers })
