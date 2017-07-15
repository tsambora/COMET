const CONFIG = require('../config')
const winston = require('winston')
const Papertrail = require('winston-papertrail').Papertrail

var loggerConfig = {
  transports: [
    new (winston.transports.Console)(),
  ]
}

if (CONFIG.logger.isFile) {
  loggerConfig.transports
    .push(new (winston.transports.File)({ filename: '/tmp/news-scrape.log' }))
}

if (CONFIG.logger.isPapertrail) {
  loggerConfig.transports
    .push(new Papertrail({
      host: CONFIG.logger.papertrail.host,
      port: CONFIG.logger.papertrail.port,
      colorize: true
    }))
}

const logger = new (winston.Logger)(loggerConfig)

module.exports = {
  'logger': logger,
}