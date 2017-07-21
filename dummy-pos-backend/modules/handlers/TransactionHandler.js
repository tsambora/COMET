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
  return TransactionService
    .transact(accTo, accFrom, transactionToken, signature, value)
    .then((payload) => {
      res.send({'result': payload})    
    })
    .catch((e) => {
      console.log(e)
      res.send({'error': e.message})
    })
})

module.exports = router
