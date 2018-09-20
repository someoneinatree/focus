import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({ uri: '/graphql' })

export default const Environment ({ children }) => (<ApolloProvider client={client}>
	<BrowserRouter>
		{children}
	</BrowserRouter>
</ApolloProvider>)
