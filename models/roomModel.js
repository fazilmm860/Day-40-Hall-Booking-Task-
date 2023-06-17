const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    seat: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    price: {
        type: String,
    }

})
module.exports = mongoose.model('room', roomSchema)