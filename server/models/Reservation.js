const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const reservationSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    selectedTime: {
        type: String,
        required: true,
        trim: true,
    },
    selectedDate: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;