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
    },
    getDetail: (req,res) => {
        const id = req.params.id
        booksModel.getDetail(id)
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