const express = require('express')
const { getAll } = require('../controllers/books')

const router = express.Router()
router.get('/getall', getAll)

module.exports = router