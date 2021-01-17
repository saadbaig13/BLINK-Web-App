const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    courseName: {type: String, required: true},
    courseCode: {type: String, required: true, unique: true},
    creditHours: {type: Number, required: true}
})

module.exports = courses = mongoose.model("courses", coursesSchema);