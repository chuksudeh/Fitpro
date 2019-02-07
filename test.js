const mongoose = require('mongoose')
const post = require('./databases/models/post')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost/post',  { useNewUrlParser: true }, () => {
    console.log('suucessfully connected to mongoose')
})
// post.create({
//     username: 'chuks',
//     title: 'arrays',
//     content: 'Arrays are one of the most important element in proramming. its uses ranges from storing a coolection of strings to utilising it as a database'

// }, (error, post) => {
//     console.log(error, post)
// })
// post.findByIdAndUpdate("5ba0e8533f852f340c2db6cf", {
//     content: 'Arrays to me is the most useful element in programming'
// }, (error, data) => {
//     console.log(error, data)
// })
// post.find({}, (error, post) =>{
//     console.log(error, post)
// })
app.post('/api/create', (req, res) =>{
    const {username, title, content} = req.body;
    post.create({username, title, content}, (error, post) =>{
        if (error) {
            console.log(error)
        }
        console.log(post)
        res.json(post)
    })
})
app.get('/api/view', (req, res) =>{
    post.find({}, (error, post) =>{
        res.json(post)
    })
})
// post.create({
//     username: 'fff',
//     title: 'ggg',
//     content: 'kbhugbyvfybf'
// }, (error, post) =>{
//     console.log(error, post)
// })
// post.find({}, (error, post) =>{
//     console.log(error, post)
// })

const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`listening on ${port}`)
})

