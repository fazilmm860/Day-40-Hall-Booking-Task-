const express = require('express');
const roomcontroller = require('../controllers/roomController');

const router = express.Router();

router
    .post("/post", roomcontroller.createRoom);

router
    .get('/get', roomcontroller.getRoom);

router
    .get('/specificget/:_id', roomcontroller.getSpecificRomm)
router
    .patch('/update/:_id', roomcontroller.updateRoom);
router
    .delete('/delete/:_id', roomcontroller.deleteRoom);

module.exports = router;