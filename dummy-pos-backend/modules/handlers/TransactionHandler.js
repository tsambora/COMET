var express = require('express')
var router = express.Router()

const TransactionService = require('../services/TransactionService.js')

router.post('/topup', function(req, res) {
  const payload = req.body
  const address = payload.address
  const value = payload.value
  return TransactionService
    .topup(address, value)
    .then((payload) => {
      res.send({'result': payload})
    })
    .catch((e) => {
      console.log(e)
      res.send({'error': e.message})
    })
})

router.post('/', function(req, res) {
  const payload = req.body
  const accTo = payload.to
  const accFrom = payload.from
  const transactionToken = payload.token
  const signedToken = payload.signed_token
  const value = payload.value
  return TransactionService
    .transact(accTo, accFrom, transactionToken, signedToken, value)
    .then((payload) => {
      res.send({'result': payload})
    })
    .catch((e) => {
      console.log(e)
      res.send({'error': e.message})
    })
})

module.exports = router
