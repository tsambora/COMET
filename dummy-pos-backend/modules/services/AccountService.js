const Promise = require('bluebird')
const CONFIG = require('../config')
const EthUtils = require("../utils/EthUtils.js")
const Web3Singleton = require("../repositories/Web3Singleton.js")
const ContractObject = require("../utils/ContractObject")

const SOL = './contracts/CometContract.sol'
const CONTRACT_NAME = 'CometContract'
const CONTRACT_ADDRESS = '0xdd6ab28f8622f5ac3a680a944b9cde92e131ed45'

const AccountService = function () {

  this.web3Instance = Web3Singleton.getInstance()

  this.getAll = () => this.web3Instance.getAllAccounts()

  this.getBalance = (address) => {
    
    const contractObject = new ContractObject(this.web3Instance.web3, CONTRACT_NAME, SOL)
    return contractObject
      .getContractInstanceFromAddress(CONTRACT_ADDRESS)
      .then((contractInstance) => {
        const balance = contractInstance.getBalance(address)
        const payload = {
          'balance': balance,
        }
        console.log(payload)
        return payload
      })
  }

}

module.exports = new AccountService()
