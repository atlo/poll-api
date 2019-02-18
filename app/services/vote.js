const Vote = require('../models/vote')

function create (params) {
  const vote = new Vote(params)

  return vote.save()
}

module.exports = {
  create
}
