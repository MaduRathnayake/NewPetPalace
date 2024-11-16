const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    petOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'PetOwner' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    date: Date,
    time: String,
    status: { type: String, default: 'pending' }  // pending, accepted, completed
});

module.exports = mongoose.model('Appointment', appointmentSchema);
