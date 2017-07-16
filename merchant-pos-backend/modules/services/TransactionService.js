const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")

var TransactionService = function () {}

TransactionService.prototype.transact = (to, from, pass, value) => {
  const web3Instance = Web3Singleton.getInstance()
  return web3Instance.transact(to, from, value)
}

module.exports = new TransactionService()