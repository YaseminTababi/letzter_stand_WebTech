const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/WebtechDBBackup',{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, (err) => {
        if (!err) {
            console.log("MongoDB connected");
        }
        else {
            console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
        }
    });
}


module.exports = connectDB;