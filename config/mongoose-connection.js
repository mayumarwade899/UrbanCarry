const mongoose = require('mongoose');
const util = require('util');
const debug = util.debuglog('db');

mongoose
.connect("mongodb://127.0.0.1:27017/urbancarry")
.then(() => {
    debug("Connected to MongoDB");
})
.catch((err) => {
    debug("Connection error: %O", err)
})

module.exports = mongoose.connection;