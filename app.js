const express = require('express')
const app = express()
const booksRouter = require('./src/routes/books')

const port = 3000
app.use(booksRouter)
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})