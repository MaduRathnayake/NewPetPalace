const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create a new appointment
router.post('/', async (req, res) => {
    const { petOwnerId, doctorId, date, time } = req.body;
    try {
        const newAppointment = new Appointment({ petOwnerId, doctorId, date, time });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Error creating appointment', error: err });
    }
});

// Get all appointments for a pet owner
router.get('/:petOwnerId', async (req, res) => {
    try {
        const appointments = await Appointment.find({ petOwnerId: req.params.petOwnerId });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching appointments', error: err });
    }
});

// Update an appointment status (accept, complete)
router.patch('/:appointmentId', async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.appointmentId,
            { status: req.body.status },
            { new: true }
        );
        res.json(updatedAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Error updating appointment', error: err });
    }
});

module.exports = router;
