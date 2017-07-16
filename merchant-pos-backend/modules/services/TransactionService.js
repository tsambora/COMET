const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")

const TransactionService = function () {
  this.web3Instance = Web3Singleton.getInstance()
  this.getTransaction = (txHash) => this.web3Instance.getTransaction(txHash)
  this.transact = (to, from, pass, value) => this.web3Instance.transact(to, from, value)
}

module.exports = new TransactionService()