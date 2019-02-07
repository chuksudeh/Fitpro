const mongoose = require('mongoose');

const testmonialSchema = new mongoose.Schema({
    email:{
        required:true, type:String
    },
    experience:{
        required:true, type:String
    }
})

const testmonial = mongoose.model('testmonial', testmonialSchema)
module.exports = testmonial;