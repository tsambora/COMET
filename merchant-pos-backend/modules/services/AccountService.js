const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")

var AccountService = function () {}

AccountService.prototype.getAll = () => {
  const web3Instance = Web3Singleton.getInstance()
  return web3Instance.getAllAccounts()
}

module.exports = new AccountService()