const mongoose = require ('mongoose')

const postSchema = new mongoose.Schema({
    username:  String,
    title: String,
    content: String
    })
     const post = mongoose.model('post', postSchema)
     module.exports = post;