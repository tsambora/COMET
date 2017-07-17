var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
var env = process.env.NODE_ENV || 'development'
app.locals.ENV = env
app.locals.ENV_DEVELOPMENT = env == 'development'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

var HomeHandler = require('./handlers/HomeHandler.js')
var AccountHandler = require('./handlers/AccountHandler.js')
var TransactionHandler = require('./handlers/TransactionHandler.js')

app.use('/', HomeHandler)
app.use('/accounts', AccountHandler)
app.use('/transactions', TransactionHandler)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
