import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
  const [selectedDate, setSelectedDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [email, setEmail] = useState("");
  const [isTimeValid, setIsTimeValid] = useState(true);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    const isValid = newTime >= "12:00" && newTime <= "21:00";

    if (isValid) {
      setSelectedTime(newTime);
    }

    setIsTimeValid(isValid);
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
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
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
            minDate={new Date()}
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
            minTime="12:00"
            maxTime="21:00"
            required
          />
          {!isTimeValid && <p style={{ color: "red" }}>Invalid time</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit Reservation</button>
        </div>
      </form>
    </div>
  );
}

export default Reservation;
