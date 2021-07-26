const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const Users = require('../models/user.model')

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    const { userId } = jwt.verify(token, SECRET_KEY)
    if (userId) {
      const user = await Users.findById(userId)

      if (user) {
        req.user = user
        req.token = token
        req.userId = userId
        next()
      } else {
        res.json({ success: false, message: 'Invalid User' })
      }
    } else {
      res.json({ success: false, message: 'Invalid Token' })
    }
  } catch (error) {
    res.status(401).json({ success: false, message: error.message })
  }
}

const createToken = async (req, res, next) => {
  const { userId } = req
  try {
    const token = jwt.sign({ userId }, SECRET_KEY, {
      expiresIn: '365d',
    })
    req.token = token
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: error.message })
  }
}

module.exports = { verifyToken, createToken }
