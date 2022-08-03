class MyError extends Error {
  constructor (code, message) {
    super(message)
    this.code = code
    this.message = message
  }

  static notFound (message) {
    return new MyError(404, message)
  }

  static internalServer (message) {
    return new MyError(500, message)
  }

  static authentication (message) {
    return new MyError(401, message)
  }

  static badRequest (message) {
    return new MyError(400, message)
  }
}

const myErrorHandler = (err, req, res, next) => {
  if (err instanceof MyError) {
    return res.status(err.code).json({ message: err.message })
  }
  res.status(500).json('something went wrong')
}

const notFoundHandler = () => { throw new MyError(404, 'Not Found route') }

module.exports = { myErrorHandler, notFoundHandler, MyError }
