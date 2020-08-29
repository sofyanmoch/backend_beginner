const express = require('express')
const { getAll,getDetail } = require('../controllers/books')

const router = express.Router()
router
.get('/getall', getAll)
.get('/getdetail/:id',getDetail)

module.exports = router