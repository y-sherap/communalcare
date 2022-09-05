const { Offer } = require('../models')

const getAllOffers = async (req, res) => {
  try {
    let allOffers = await Offer.findAll()
    res.send(allOffers)
  } catch (error) {
    throw error
  }
}

const getOfferByUser = async (req, res) => {
  try {
    user_Id = parseInt(req.params.user_id)
    let offerByUser = await Offer.findAll({where: { userId: user_Id }})
    res.send(offerByUser)
  } catch (error) {
    throw error
  }
}

const createOffer = async (req, res) => {
  try {
    let userId = req.params.user_id
    let offerBody = {
      userId,
      ...req.body
    }
    let offer = await Offer.create(offerBody)
    res.send(offer)
  } catch (error) {
    throw error
  }
}

const updateOffer = async (req, res) => {
  try {
    let offerId = req.params.offer_id
    let updatedOffer = await Offer.update(req.body, {
      where: {
        id: offerId
      }
    })
    res.send(updatedOffer)
  } catch (error) {
    throw error
  }
}

const deleteOffer = async (req, res) => {
  try {
    let offerId = parseInt(req.params.offer_id)
    await Offer.destroy({ where: { id: offerId } })
    res.send({ message: 'offer deleted' })
  } catch (error) {
    throw error
  }
}


module.exports = {
  getAllOffers,
  getOfferByUser,
  createOffer,
  updateOffer,
  deleteOffer,
}
