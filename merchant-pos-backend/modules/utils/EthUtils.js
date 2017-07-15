const getAllAccounts = (web3) => {
  return web3.eth.accounts 
}

const getBalance = (web3, acct) => {
  return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber()
}

module.exports = {
  getAllAccounts: getAllAccounts,
  getBalance: getBalance,
}