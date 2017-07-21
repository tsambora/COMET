const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")
const ContractObject = require("../utils/ContractObject")

// const SOL = './contracts/CometContract.sol'
// const CONTRACT_NAME = 'CometContract'

const SOL = './contracts/Greeter.sol'
const CONTRACT_NAME = 'greeter'

const TransactionService = function () {
  
  this.web3Instance = Web3Singleton.getInstance()
  
  this.getTransaction = (txHash) => this.web3Instance.getTransaction(txHash)

  this.transact = (to, from, transactionToken, signature, value) => {
    const rsv = EthUtils.getRSVFromSignature(this.web3Instance.web3, signature)
    const contractObject = new ContractObject(this.web3Instance.web3, CONTRACT_NAME, SOL)
    return contractObject
      .getContractInstance(from)
      .then((contractInstance) => {
        console.log('from   ', from)
        // console.log('sender ', contractInstance.getSender())
        // console.log('transfer', contractInstance.transfer(from, to, value, transactionToken, rsv.v, rsv.r, rsv.s))

        // console.log(contractInstance)
        console.log('greet', contractInstance.greet())

        // const aaa = contractInstance.checkAddress(from, to, value, transactionToken, rsv.v, rsv.r, rsv.s)
        // console.log('transfer', aaa)

        return 'aaa'
      })
    // return this.web3Instance.transact(to, from, value)
  }
}

module.exports = new TransactionService()