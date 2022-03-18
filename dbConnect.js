const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://GokulPrasath:gokul535@cluster0.g3xxz.mongodb.net/NUWS?retryWrites=true&w=majority'  , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})


module.exports = mongoose