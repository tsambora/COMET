require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
const fs = require('fs')
const port = 8080
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/App').default
const favicon = require('serve-favicon')
const path = require('path')

const server = express()

server.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
    return next()
})

server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

server.use('/public', express.static('./public'))

server.use((req, res) => {
    const context = ReactRouter.createServerRenderContext()
    const body = ReactDOMServer.renderToString(
        React.createElement(ServerRouter, { location: req.url, context: context },
            React.createElement(App)
        )
    )

    res.write(template({ body: body }))
    res.end()
})

console.log('listening on ' + port)
server.listen(port)
