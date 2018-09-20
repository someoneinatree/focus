const express = require('express')

const data = require('./data')

const server = express()

server.use('/graphql', data.route)

server.use('/', express.static('./ui/out'))

server.use('*', express.static('./ui/out/index.html'))

server.listen(1810)
