const Promise = require('bluebird')
const mysql = require('mysql')

const CONFIG = require('../config')

var ExampleRepo = function () {

  this.DB_HOST = CONFIG.db.host
  this.DB_PORT = CONFIG.db.port
  this.DB_NAME = CONFIG.db.name
  this.DB_USER = CONFIG.db.user
  this.DB_PASS = CONFIG.db.pass

  this._connect = () => {
    var connectionConfig = {
      host     : this.DB_HOST,
      user     : this.DB_USER,
      password : this.DB_PASS,
      database : this.DB_NAME,
    }
    var connection = mysql.createConnection(connectionConfig)
    connection.connect()
    return connection
  }

  this.query = (query) => {
    var conn = this._connect()
    return new Promise((resolve, reject) => {
      conn.query(query, function (error, results, fields) {
        if (error)
          reject(error)
        resolve(results)
      })
    })
    .then((res) => {
      conn.end()
      return res
    })
  }

  this.select1 = () => {
    return this.query('select 1')
  }
}

module.exports = new ExampleRepo()