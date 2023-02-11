const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://admin-gaurav:5699256@cluster0.eaxhtws.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;