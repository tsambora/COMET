class CustomError extends Error {
  constructor(name, default_message, message) {
    super(message || default_message)
    this.name = name
    this.default_message = default_message
    this.instanceOf = (_class) => {
      return this.name == _class.name
    }
  }
}

class EmptyError extends CustomError {
  constructor(message) {
    let name = 'EmptyError'
    let default_message = 'result is empty' 
    super(name, default_message, message)
  }
}

module.exports = {
  'EmptyError': EmptyError,
}