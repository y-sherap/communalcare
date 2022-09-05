const Router = require('express').Router()
const controller = require('../controllers/RequestController')

Router.get('/get_all',controller.getAllRequests)
Router.get('/:user_id',controller.getRequestByUser)
Router.post('/:user_id',controller.createRequest)
Router.put('/:request_id',controller.updateRequest)
Router.delete('/:request_id',controller.deleteRequest)

module.exports = Router