var express = require('express')
var router = express.Router()

const AccountService = require('../services/AccountService.js')

router.get('/', function(req, res) {
  res.send({
    result: AccountService.getAll()
  })
})

router.get('/:address/balance', function(req, res) {
  const address = req.params.address
  return AccountService
    .getBalance(address)
    .then((payload) => {
      res.send({'result': payload})    
    })
    .catch((e) => {
      console.log(e)
      res.send({'error': e.message})
    })
})

module.exports = router
