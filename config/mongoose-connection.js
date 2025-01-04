const mongoose = require('mongoose');
const config = require('config')
const debug = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/urbancarry`)
.then(() => {
    serverSelectionTimeoutMS: 30000
    debug("Connected to MongoDB");
})
.catch((err) => {
    debug("Connection error: %O", err)
})

module.exports = mongoose.connection;