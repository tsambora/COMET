const Promise = require("bluebird")
const fs = require("fs")
const Web3 = require("web3")

const CONFIG = require("../modules/config.js")
const EthUtils = require("../modules/utils/EthUtils")

const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.eth.host))

const addr = process.argv[2]
const transactionToken = process.argv[3]
console.log(EthUtils.sign(web3, addr, transactionToken))