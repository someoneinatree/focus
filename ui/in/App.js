import React from 'react'
import styled from 'styled-components'

import Garden from './Garden'

const Application = styled.div`
	font-family: sans-serif;
	> h1 {
		margin: 0;
	}
`

export default class App extends React.Component {
	render () {
		return (<Application>
			<h1>focus</h1>
			<Garden />
		</Application>)
	}
}
