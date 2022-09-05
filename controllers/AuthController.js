const { User } = require('../models')
const middleware = require('../middleware')
const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { firstName, lastName, username, email } = req.body
    let rawPassword = req.body.password
    let password = await middleware.hashPassword(rawPassword)
    const user = await User.create({ firstName, lastName, username, email, password })
    res.send(user)
  } catch (error) {
    throw error
  }
}

// const CheckSession = async (req, res) => {
//   console.log(res.locals)
//   const { payload } = res.locals
//   res.send(payload)
// }

module.exports = {
  Login,
  Register,
  // CheckSession
}