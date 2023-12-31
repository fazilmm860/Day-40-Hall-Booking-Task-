const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const roomRouter = require('./routes/roomRouter');
const bookingRouter = require('./routes/bookingRouter');

dotenv.config();



const app = express();
const port = process.env.PORT;
const dburl = process.env.DB_URL;



mongoose.connect(dburl)

const con = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

try {
    con.on('open', () => {
        console.log("MongoDB Connected");
    })
}
catch (err) {
    console.log(`Error: ${err}`);
}

app.get('/', (req, res) => {
    res.send(`<h1 h1 > Ticket Booking</h1> `);
});

app.use('/room', roomRouter)
app.use('/booking', bookingRouter);


app.listen(port, (req, res) => {
    console.log(`App is running on port: ${port}`);
});
