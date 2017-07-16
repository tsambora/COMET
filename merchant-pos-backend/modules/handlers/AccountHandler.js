var express = require('express')
var router = express.Router()

const AccountService = require('../services/AccountService.js')

router.get('/all', function(req, res) {
  res.send({
    result: AccountService.getAll()
  })
})

router.get('/:address/balance', function(req, res) {
  const address = req.params.address
  res.send({
    result: AccountService.getBalance(address)
  })
})

module.exports = router
