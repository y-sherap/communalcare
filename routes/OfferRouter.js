const Router = require('express').Router()
const controller = require('../controllers/OfferController')

Router.get('/get_all',controller.getAllOffers)
Router.get('/:user_id',controller.getOfferByUser)
Router.post('/:user_id',controller.createOffer)
Router.put('/:offer_id',controller.updateOffer)
Router.delete('/:offer_id',controller.deleteOffer)

module.exports = Router