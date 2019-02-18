const mongoose = require('mongoose')
const { Schema } = mongoose

const Poll = Schema({
  name: String,
  description: String,
  answers: [{
    label: String,
    value: String
  }]
})

module.exports = mongoose.model('Poll', Poll)
