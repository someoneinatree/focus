import React from 'react'
import styled from 'styled-components'

import Projects from './Projects'

const Application = styled.div`
	font-family: sans-serif;
	> h1 {
		margin: 0;
	}
`

export default class App extends React.Component {
	render () {
		return (<Application>
			<h1>unfile</h1>
			<Projects />
		</Application>)
	}
}
