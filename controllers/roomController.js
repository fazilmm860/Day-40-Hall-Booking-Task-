

const roomModel = require('../models/roomModel');



module.exports.createRoom = async (req, res) => {
    console.log("request from Postman:::" + req.body);
    const newRoom = new roomModel({
        seat: req.body.seat,
        amenities: req.body.amenities,
        price: req.body.price

    });
    try {
        await newRoom.save();

        res.status(201).json(newRoom);
    }
    catch (Error) {
        res.status(400).json({ message: Error.message })
    }

};

module.exports.getRoom = async (req, res) => {
    try {
        const room = await roomModel.find();

        res.status(201).json(room)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }

};

module.exports.getSpecificRomm = async (req, res) => {
    const _id = req.params._id
    try {
        const room = await roomModel.findOne({ _id: _id });

        res.status(200).json(room)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports.updateRoom = async (req, res) => {
    const _id = req.params._id;

    try {
        await roomModel.findOneAndUpdate({
            _id: _id,
        },
            {
                $push: { amenities: req.body.amenities }
            }

        )

        res.status(201).json({ _id: _id })
    }
    catch (error) {
        res.status(400).json({ message: Error.message })
    }
};

module.exports.deleteRoom = async (req, res) => {
    const _id = req.params._id;
    try {
        await roomModel.findOneAndRemove({
            _id: _id
        })
        res.status(201).json({ _id: _id })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};