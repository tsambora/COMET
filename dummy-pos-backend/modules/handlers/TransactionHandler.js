var express = require('express')
var router = express.Router()

const TransactionService = require('../services/TransactionService.js')

router.get('/:txhash', function(req, res) {
  const txHash = req.params.txhash
  res.send({
    result: TransactionService.getTransaction(txHash)
  })
})

router.post('/', function(req, res) {
  const payload = req.body
  const accTo = payload.to
  const accFrom = payload.from
  const transactionToken = payload.token
  const signature = payload.signature
  const value = payload.value
  res.send({
    result: TransactionService.transact(accTo, accFrom, transactionToken, signature, value)
  })
})

module.exports = router
