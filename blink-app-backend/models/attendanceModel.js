const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    attendanceStatus: {type: String, enum: ['Present', 'Absent'], required: true},
    attendanceTime: {type: String, required: true},
    courseName: {type: String, required: true},
    studentUserId: {type: String, required: true}
})

module.exports = attendance = mongoose.model("attendance", attendanceSchema);