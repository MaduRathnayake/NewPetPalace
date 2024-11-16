// Appointments.js
import React, { useState } from 'react';
import './Appointments.css';


const Appointments = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    doctor: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now handle the form submission, e.g., send data to a backend
    console.log('New Appointment Details:', appointmentDetails);
  };

  return (
    <div className="appointments-section">
      <h2 className="appointments-header">Your Appointments</h2>
      
      {/* New Appointment Form */}
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Doctor</label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            value={appointmentDetails.doctor}
            onChange={handleChange}
            placeholder="Enter Doctor's Name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={appointmentDetails.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={appointmentDetails.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>

      {/* Appointments List */}
      <div className="appointment-card">
        <div className="details">
          <p>Appointment with Dr. John Doe</p>
          <p>Date: 12th Dec 2024</p>
        </div>
        <div className="actions">
          <button>Edit</button>
          <button>Cancel</button>
        </div>
      </div>

      {/* Repeat for other appointments */}
    </div>
  );
};

export default Appointments;
