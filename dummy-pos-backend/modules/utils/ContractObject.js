const fs = require("fs")
const solc = require("solc")

const ContractObject = function (web3, name, contract_path) {
  this.web3 = web3
  this.name = ':' + name

  this.source = fs.readFileSync(contract_path, 'utf8')
  this.compiledContract = solc.compile(this.source, 1)
  this.abi = this.compiledContract.contracts[this.name].interface
  this.bytecode = this.compiledContract.contracts[this.name].bytecode

  this.contract = web3.eth.contract(JSON.parse(this.abi))
  this.gasEstimate = web3.eth.estimateGas({data: this.bytecode})

  this.getContractInstance = (from) => {
    return new Promise((resolve, reject) => {
      this.contract.new(
        {
          from: from, 
          data: this.bytecode, 
          gas: this.gasEstimate,
        }, (e, contractInstance) => {
          if (!e) {
            if(!contractInstance.address) {
              console.log("Contract transaction send: TransactionHash: " + contractInstance.transactionHash + " waiting to be mined...")
            } else {
              console.log("Contract mined! Address: " + contractInstance.address)
              resolve(contractInstance)
            }
          } else {
            reject(e)
          }
      })
    })
  }

  this.getContractInstanceFromAddress = (address) => this.contract.at(address)
}

module.exports = ContractObject