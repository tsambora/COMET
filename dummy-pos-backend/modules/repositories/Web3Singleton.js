const Web3 = require("web3")
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")

const Web3Singleton = (function () {
 
  var web3Instance
  const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.eth.host))
 
  const init = () => {
    console.log('=== connecting '+CONFIG.eth.host)
    return {
      web3: web3,
      getAllAccounts: () => EthUtils.getAllAccounts(web3),
      getBalance: (address) => EthUtils.getBalance(web3, address),
      getTransaction: (txHash) => web3.eth.getTransaction(txHash),
      transact: (to, from, value) => EthUtils.transact(web3, to, from, value),
    }
  }
 
  return {
    getInstance: () => {
      if (!web3Instance)
        web3Instance = init()
      return web3Instance
    }
  }
})()

module.exports = Web3Singleton