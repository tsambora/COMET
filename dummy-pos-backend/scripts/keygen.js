const EthUtil = require("ethereumjs-util")
var Web3 = require("web3")
var web3 = new Web3()

const hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c+=2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

const privateKeyToAddress = function(privateKey) {
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}

const seed = process.argv[2]
const privateKey = web3.sha3(seed)
const address = privateKeyToAddress(privateKey.slice(2))

console.log('seed', seed)
console.log('privateKey', privateKey)
console.log('address', address)