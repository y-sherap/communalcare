const { Request } = require('../models')

const getAllRequests = async (req, res) => {
  try {
    let allRequests = await Request.findAll()
    res.send(allRequests)
  } catch (error) {
    throw error
  }
}

const getRequestByUser = async (req, res) => {
  try {
    user_Id = parseInt(req.params.user_id)
    let requestByUser = await Request.findAll({where: { userId: user_Id }})
    res.send(requestByUser)
  } catch (error) {
    throw error
  }
}

const createRequest = async (req, res) => {
  try {
    console.log(req.body)
    let userId = parseInt(req.params.user_id)
    let requestBody = {
      userId:userId,
      ...req.body
    }
    let request = await Request.create(requestBody)
    res.send(request)
  } catch (error) {
    throw error
  }
}

const updateRequest = async (req, res) => {
  try {
    let requestId = req.params.request_id
    let updatedRequest = await Request.update(req.body, {
      where: {
        id: requestId
      }
    })
    res.send(updatedRequest)
  } catch (error) {
    throw error
  }
}

const deleteRequest = async (req, res) => {
  try {
    let requestId = parseInt(req.params.request_id)
    await Request.destroy({ where: { id: requestId } })
    res.send({ message: 'request deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllRequests,
  getRequestByUser,
  createRequest,
  updateRequest,
  deleteRequest,
}
