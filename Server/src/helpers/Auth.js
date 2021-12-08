const Auth = {}
const jwt = require('jsonwebtoken')

Auth.verifyToken = (request, response, next) => {
  if (!request.headers.authorization) {
    return response.json({
      message: 'You are not allowed to make this request'
    })
  }

  const token = request.headers.authorization
  if (token === null) {
    return response.json({
      message: 'You are not allowed to make this request'
    })
  }

  jwt.verify(token, 'Secret', (error, result) => {
    if(error) 
    return response.json({
      message: 'You are not allowed to make this request'
    })

    next();
  })
}

module.exports = Auth