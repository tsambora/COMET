const Web3 = require("web3")

const CONFIG = require("../modules/config.js")
const web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.eth.host))

const passphrase = process.argv[2]
console.log(web3.personal.newAccount(passphrase))
