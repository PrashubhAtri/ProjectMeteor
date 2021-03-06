const mongoose = require('mongoose')
const config = require('config')
const URI = config.get('mongoURI')

//DB connection
const connectDB = async () =>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log("DB connected")
    }catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB