const mongoose = require('mongoose')


const connectDB = async (url) => {
    await mongoose.connect(url)
    .then(result => {
        console.log('Connected to DB');
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = connectDB;
