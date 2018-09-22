module.exports = {
	Query: {
		focus: (_, { projectName, path }) => ({
			example: 'Example object'
		})
	},
	Mutation: {
		example: (_, { projectName, path }) => ({
			example: 'Great'
		})
	}
}
