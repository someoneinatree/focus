module.exports = `
type Focus {
	example: String
}

type Query {
	focuses: [Focus]
}

type Mutation {
	example(id: String!): Focus
}

schema {
	query: Query
	mutation: Mutation
}
`
