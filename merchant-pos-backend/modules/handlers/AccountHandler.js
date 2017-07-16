var express = require('express')
var router = express.Router()

const AccountService = require('../services/AccountService.js')

router.get('/all', function(req, res) {
  res.send({
    result: AccountService.getAll()
  })
})

// router.get('/:id', function(req, res) {
//   const id = req.params.id
//   res.send({
//     result: AccountService.method1(id)
//   })
// })

module.exports = router
