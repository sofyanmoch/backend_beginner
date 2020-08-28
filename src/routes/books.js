const express = require('express')
const router = express.Router()
router.get('/getall',(req,res)=>{
    res.send('Get all books')
})

module.exports = router