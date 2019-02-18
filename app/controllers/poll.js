const mongoose = require('mongoose')
const Poll = require('../services/poll')
const Vote = require('../services/vote')

function handleError (response, error) {
  return response
    .status(500)
    .json({error})
}

function handleNotFound (response, data) {
}

function list (request, response) {
  Poll
    .list()
    .then(polls => response.json({polls}))
    .catch(error => handleError(response, error))
}

function create (request, response) {
  Poll
    .create(request.body)
    .then(poll => response.json({poll}))
    .catch(error => handleError(response, error))
}

function get (request, response) {
  Poll
    .get(request.params.poll)
    .then(function (poll) {
      handleNotFound(response, poll)

      response
        .status(200)
        .json({poll})
    })
    .catch(error => handleError(response, error))
}

function vote (request, response) {
  Vote
    .create({
      answer: request.body.answer,
      poll: request.params.poll,
      user: mongoose.Types.ObjectId()
    })
    .then(function (vote) {
      console.log({vote})
      return Poll.get(request.params.poll)
    })
    .then(function (poll) {
      handleNotFound(response, poll)

      response
        .status(200)
        .json({poll})
    })
    .catch(error => handleError(response, error))
}

module.exports = {
  list,
  create,
  get,
  vote
}
