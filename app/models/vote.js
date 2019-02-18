const mongoose = require('mongoose')
const { Schema } = mongoose

const Vote = Schema({
  user: {
    type: Schema.Types.ObjectId,
    unique: true
  },
  answer: Schema.Types.ObjectId,
  poll: {
    type: Schema.Types.ObjectId,
    ref: 'Poll' 
  }
})

module.exports = mongoose.model('Vote', Vote)
