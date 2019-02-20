require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./app/router')

const app = express()

mongoose.connect(process.env.DB, { useNewUrlParser: true })

const corsOptions = {
  origin: process.env.CLIENT,
  optionsSuccessStatus: 200
}

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use('/', router)

app.listen(process.env.PORT)
