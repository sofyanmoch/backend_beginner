const booksModel = require('../models/books')

const books = {
    getAll: (req,res) => {
        booksModel.getAll()
        .then((result) => {
            res.json(result)
        })
        .catch((err) =>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    }
}

module.exports = books