const mongoose = require('mongoose')
const { Schema } = mongoose

const Poll = Schema({
  name: String,
  description: String,
  answers: [{
    name: String
  }]
})

module.exports = mongoose.model('Poll', Poll)
