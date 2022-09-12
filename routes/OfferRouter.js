const Router = require('express').Router()
const controller = require('../controllers/OfferController')
const middleware = require('../middleware')

Router.get('/get_all',controller.getAllOffers)
Router.get('/:user_id',
middleware.stripToken,
middleware.verifyToken,
controller.getOfferByUser)
Router.get('/get-offer/:offer_id', controller.getSingleOffer)
Router.post('/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createOffer)
Router.put('/:offer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateOffer)
Router.delete('/:offer_id',
  middleware.stripToken,
  middleware.verifyToken,  
  controller.deleteOffer)

module.exports = Router