'use strict';

var assert = require('assert');
var ExampleService = require('../../modules/services/ExampleService.js');

describe('ExampleService', function () {

  it('method1', function () {
    assert(ExampleService.method1('hello') == 'hello')
  })

})
