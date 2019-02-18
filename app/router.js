const express = require('express')
const pollController = require('./controllers/poll')

const router = express.Router()

router.get('/poll', pollController.list)
router.get('/poll/:poll', pollController.get)
router.post('/poll/:poll', pollController.vote)

module.exports = router
