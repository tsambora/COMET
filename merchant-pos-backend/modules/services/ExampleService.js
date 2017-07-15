const Promise = require('bluebird')
const CONFIG = require('../config')

var ExampleService = function () {}

ExampleService.prototype.method1 = (arg) => {
  return arg
}

module.exports = new ExampleService()