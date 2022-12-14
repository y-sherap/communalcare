const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
        where: { email: req.body.email },
        raw: true
      })
      if (
        user &&
        (await middleware.comparePassword(user.password, req.body.password))
      ) {
        let payload = {
            id: user.id,
            email: user.email
          }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })  
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
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

const CheckSession = async (req, res) => {
  console.log(res.locals)
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
}