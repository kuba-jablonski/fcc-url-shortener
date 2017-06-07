const mongoose = require('mongoose');

const Url = mongoose.model(Url, {
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
});

module.exports = {Url};