const bookingModel = require('../models/bookingModel');

module.exports.Hallbooking_post = async (req, res) => {
    const booking = new bookingModel({
        customer_Name: req.body.customer_Name,
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time
    })
    try {
        await booking.save()

        res.status(200).json(booking)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};
module.exports.getBooking = async (req, res) => {
    try {
        const getbooking = await bookingModel.find();
        res.status(200).json(getbooking)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }


}