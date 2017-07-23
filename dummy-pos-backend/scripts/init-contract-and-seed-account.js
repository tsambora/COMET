const Promise = require("bluebird")
const fs = require("fs")
const Web3 = require("web3")
const solc = require("solc")

const CONFIG = require("../modules/config.js")
const ContractObject = require("../modules/utils/ContractObject")
const EthUtils = require("../modules/utils/EthUtils")

const SOL = './contracts/CometContract.sol'
const CONTRACT_NAME = 'CometContract'
const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.eth.host))

const contractObject = new ContractObject(web3, CONTRACT_NAME, SOL)
const commonwealthAddr = web3.eth.accounts[0]
const commonwealthToken = '000000'

contractObject.getContractInstance(commonwealthAddr, [10000000000])
  .then((contractInstance) => {
    console.log('')
    console.log('contractInstance created with address: ')
    console.log(contractInstance.address)
    console.log('')
    console.log('Commonwealth address:')
    console.log(contractInstance.getMsgSender())
    console.log('')
    console.log('Commonwealth balance:')
    console.log(contractInstance.getBalance(commonwealthAddr))
    console.log('')

    const merchantAddr = web3.eth.accounts[1]
    console.log('Merchant address:')
    console.log(merchantAddr)
    const commonwealthToMerchantToken = '000001'
    const commonwealthToMerchantSign = EthUtils.sign(web3, commonwealthAddr, commonwealthToMerchantToken)
    var rsv = EthUtils.getRSVFromSignedToken(web3, commonwealthToMerchantSign.substr(2))
    contractInstance.transfer(commonwealthAddr, merchantAddr, 100000, commonwealthToMerchantToken, rsv.v, rsv.r, rsv.s)
    console.log('Merchant balance:')
    console.log(contractInstance.getBalance(merchantAddr))
    console.log('')

    const buyerAddr = web3.eth.accounts[2]
    console.log('Buyer address:')
    console.log(buyerAddr)
    const commonwealthToBuyerToken = '000002'
    const commonwealthToBuyerSign = EthUtils.sign(web3, commonwealthAddr, commonwealthToBuyerToken)
    var rsv = EthUtils.getRSVFromSignedToken(web3, commonwealthToBuyerSign.substr(2))
    contractInstance.transfer(commonwealthAddr, buyerAddr, 1000000, commonwealthToBuyerToken, rsv.v, rsv.r, rsv.s)
    console.log('Buyer balance:')
    console.log(contractInstance.getBalance(buyerAddr))
    console.log('')
  })
  .catch(console.log)

// commonwealth contract address = 0xdd6ab28f8622f5ac3a680a944b9cde92e131ed45
