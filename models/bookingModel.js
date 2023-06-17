const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    customer_Name: {
        type: String,
        required: true,
        min: 3
    },
    date: {
        type: Date,
        default: new Date()
    },
    start_time: {
        type: String

    },
    end_time: {
        type: String

    }

});
module.exports = mongoose.model('booking', bookingSchema); 