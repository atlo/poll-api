const Poll = require('../models/poll')
const Vote = require('../models/vote')

function list (params = []) {
  return Poll.find(...params)
}

function get (id) {
  return Promise.all([
    Poll.findById(id).lean(),
    Vote.find({poll: id}).lean()
  ]).then(function ([poll, votes]) {
    const pollWithVotes = {
      ...poll,
      votes: [...votes]
    }
    
    return pollWithVotes
  })
    .catch(error => error)
}

function create (params) {
  const poll = new Poll(params)

  return poll.save()
}

module.exports = {
  list,
  get,
  create
}
