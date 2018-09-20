const graphqlHTTP = require('express-graphql')

const schema = require('./di/schema')

const graphqlEndpoint = graphqlHTTP({ schema, graphiql: true })

module.exports = { route: graphqlEndpoint }
