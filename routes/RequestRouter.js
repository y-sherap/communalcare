const Router = require('express').Router()
const controller = require('../controllers/RequestController')
const middleware = require('../middleware')

Router.get('/get_all',controller.getAllRequests)
Router.get('/:user_id',controller.getRequestByUser)
Router.post('/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createRequest)
Router.put('/:request_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateRequest)
Router.delete('/:request_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteRequest)

module.exports = Router