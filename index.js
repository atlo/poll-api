require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./app/router')

const app = express()

mongoose.connect(`mongodb://localhost:27017/${process.env.DB}`, { useNewUrlParser: true })

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', router)

app.listen(process.env.PORT)
