const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")

const AccountService = function () {
  this.web3Instance = Web3Singleton.getInstance()
  this.getAll = () => this.web3Instance.getAllAccounts()
  this.getBalance = (address) => this.web3Instance.getBalance(address)
}

module.exports = new AccountService()