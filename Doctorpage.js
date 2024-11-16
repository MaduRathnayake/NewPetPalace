import React, { useState } from 'react';

const DoctorPage = () => {
  const [appointments, setAppointments] = useState([]);

  const handleRegister = () => {
    console.log('Register doctor');
  };

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <button onClick={handleRegister}>Register as Doctor</button>
      <div>
        <h3>Pending Appointments</h3>
        {/* Fetch and display appointments */}
        {appointments.map((appt) => (
          <div key={appt.id}>
            <p>{appt.user}</p>
            <button onClick={() => console.log('Accept')}>Accept</button>
            <button onClick={() => console.log('Reject')}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;