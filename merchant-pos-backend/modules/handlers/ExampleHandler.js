var express = require('express')
var router = express.Router()

const ExampleService = require('../services/ExampleService.js')

router.get('/:id', function(req, res) {
  const id = req.params.id
  res.send({
    result: ExampleService.method1(id)
  })
})

module.exports = router
