const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")
const ContractObject = require("../utils/ContractObject")

const SOL = './contracts/CometContract.sol'
const CONTRACT_NAME = 'CometContract'
const CONTRACT_ADDRESS = '0xdd6ab28f8622f5ac3a680a944b9cde92e131ed45'
const COMMONWEALTH_ADDRESS = '0xff06ad5d076fa274b49c297f3fe9e29b5ba9aadc'

const TransactionService = function () {

  this.web3Instance = Web3Singleton.getInstance()

  this.getTransaction = (txHash) => this.web3Instance.getTransaction(txHash)

  this.transact = (to, from, transactionToken, signedToken, value) => {
    const rsv = EthUtils.getRSVFromSignedToken(this.web3Instance.web3, signedToken.substr(2))
    const contractObject = new ContractObject(this.web3Instance.web3, CONTRACT_NAME, SOL)
    return contractObject
      .getContractInstanceFromAddress(CONTRACT_ADDRESS)
      .then((contractInstance) => {
        const balanceBefore = contractInstance.getBalance(from)
        contractInstance.transfer(from, to, value, transactionToken, rsv.v, rsv.r, rsv.s)
        const balanceAfter = contractInstance.getBalance(from)
        const payload = {
          'from': from,
          'balance_before': balanceBefore,
          'balance_after': balanceAfter,
        }
        console.log(payload)
        return payload
      })
  }

  this.topup = (address, value) => {
    const contractObject = new ContractObject(this.web3Instance.web3, CONTRACT_NAME, SOL)
    return contractObject
      .getContractInstanceFromAddress(CONTRACT_ADDRESS)
      .then((contractInstance) => {
        const commonwealthToken = Math.random().toString(36).substring(2,8)
        const commonwealthSign = EthUtils.sign(this.web3Instance.web3, COMMONWEALTH_ADDRESS, commonwealthToken)
        const rsv = EthUtils.getRSVFromSignedToken(this.web3Instance.web3, commonwealthSign.substr(2))
        contractInstance.transfer(COMMONWEALTH_ADDRESS, address, value, commonwealthToken, rsv.v, rsv.r, rsv.s)
        const balance = contractInstance.getBalance(address)
        const payload = {
          'address': address,
          'balance': balance,
        }
        console.log(payload)
        return payload
      })
  }
}

module.exports = new TransactionService()
