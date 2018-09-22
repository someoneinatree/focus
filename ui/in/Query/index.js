import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Loading from './Loading'
import Error from './Error'

const queries = {
	example: name => gql`{
		example(name: "${name}") {
			name
			description
		}
	}`
}

const Tree = ({ name, render }) => (<Query query={queries.example(name)}>{({ loading, error, data }) => {
	if (loading) return <Loading>Loading</Loading>
	if (error) return <Error>{error}</Error>
	return render(data)
}}</Query)

export default { Tree }
