const db = require('../configs/db')

const books = {
    getAll: () => {
        return new Promise((resolve,reject)=> {
            db.query("Select * from books",(err,result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    getDetail: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`Select * from books where id='${id}'`,(err,result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = books