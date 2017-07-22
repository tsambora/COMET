const fs = require("fs")
const solc = require("solc")

const ContractObject = function (web3, name, contract_path) {
  this.web3 = web3
  this.web3.eth.defaultAccount = this.web3.eth.accounts[0]
  this.name = ':' + name

  this.source = fs.readFileSync(contract_path, 'utf8')
  this.compiledContract = solc.compile(this.source, 1)
  if ((Object.keys(this.compiledContract.contracts).length == 0) || ('undefined' === typeof this.compiledContract.contracts[this.name]))
    throw ("contract is broken")
  this.abi = this.compiledContract.contracts[this.name].interface
  this.bytecode = this.compiledContract.contracts[this.name].bytecode

  this.contract = web3.eth.contract(JSON.parse(this.abi))
  this.gasEstimate = web3.eth.estimateGas({data: this.bytecode})

  this.getContractInstance = (from, params) => {
    return new Promise((resolve, reject) => {
      const newContractPayload = {
        'from': from, 
        'data': this.bytecode, 
        'gas': this.gasEstimate*2,
      }
      const newContractMethod = (e, contractInstance) => {
        if (!e) {
          if(!contractInstance.address) {
            console.log("Contract transaction send: TransactionHash: " + contractInstance.transactionHash + " waiting to be mined...")
          } else {
            console.log("Contract mined! Address: " + contractInstance.address)
            resolve(contractInstance)
          }
        } else
          reject(e)
      }
      if ('undefined' === typeof params)
        this.contract.new(newContractPayload, newContractMethod)
      else {
        if (params.length == 1) {
          this.contract.new(params[0], newContractPayload, newContractMethod)
        } else 
        if (params.length == 2) {
          this.contract.new(params[0], params[1], newContractPayload, newContractMethod)
        }
      }
    })
  }

  this.getContractInstanceFromAddress = (address) => new Promise((resolve, reject) => resolve(this.contract.at(address)))
}

module.exports = ContractObject