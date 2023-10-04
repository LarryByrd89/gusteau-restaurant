import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/style/style.css"

function Reservation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [email, setEmail] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for form submission to server
  };

  return (
    <section className='reservation'>
      <div className='container'>
      <h1>Make a Reservation</h1>
      <h2>Remember Hours Are From<br/> 12:00 pm -10:00 pm </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            className='reservation-field'
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            className='reservation-field'
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select a date"
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            className='reservation-field'
            id=''
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <button type="submit" id='reservation-btn'>Submit Reservation</button>
        </div>
      </form>
      </div>
      </section>
  );
}

export default Reservation;
