const mongoose = require('mongoose')

const connectDB = (url) => {
    try {
        mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("mongodb connection SUCCESS...");
    } catch (error) {
        console.log("mongodb connection FAIL...");
        process.exit(1)
    }
}

module.exports = connectDB;