import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({ uri: '/graphql' })

export default class Environment extends React.Component {
	render () {
		return (<ApolloProvider client={client}>
			<Router>
				{this.props.children}
			</Router>
		</ApolloProvider>)
	}
}
