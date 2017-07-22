const getAllAccounts = (web3) => {
  return web3.eth.accounts
}

const getBalance = (web3, acct) => {
  return web3.fromWei(web3.eth.getBalance(acct), 'ether').toNumber()
}

const unlockAccount = (web3, acc, pass) => {
  return web3.personal.unlockAccount(acc, pass)
}

const lockAccount = (web3, acc, pass) => {
  return web3.personal.lockAccount(acc, pass)
}

const transact = (web3, acc1, acc2, value) => {
  const UNIT = 'ether'
  const txHash = web3.eth.sendTransaction({'to': acc1, 'from': acc2, 'value': web3.toWei(value, UNIT), 'gasLimit': 21000, 'gasPrice': 20000000})
  return txHash
}

const getRSVFromSignedToken = (web3, signedToken) => {
  const res = {
    r: "0x" + signedToken.substr(0, 64),
    s: "0x" + signedToken.substr(64, 64),
    v: web3.toHex(web3.toDecimal(signedToken.substr(128, 2)) + 27)
  }
  return res
}

const sign = (web3, addr, transactionToken) => web3.eth.sign(addr, web3.sha3(transactionToken))

module.exports = {
  getAllAccounts: getAllAccounts,
  getBalance: getBalance,
  getRSVFromSignedToken: getRSVFromSignedToken,
  sign: sign,
  lockAccount: lockAccount,
  transact: transact,
  unlockAccount: unlockAccount,
}
