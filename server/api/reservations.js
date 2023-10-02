const express = require('express');
const router = express.Router();
// const Reservation = require('../models/Reservation');


router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      selectedDate,
      selectedTime,
      email,
    } = req.body;

    const newReservation = new Reservation({
      firstName,
      lastName,
      selectedDate,
      selectedTime,
      email,
    });
    await newReservation.save();

    res.status(201).json({ message: 'Reservation created successfully' });
  } catch (error) {
    console.error('Error creating reservation', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
