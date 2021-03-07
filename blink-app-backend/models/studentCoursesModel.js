const mongoose = require("mongoose");

const studentCoursesSchema = new mongoose.Schema({
    courseName: {type: String, required: true},
    courseCode: {type: String, required: true},
    creditHours: {type: Number, required: true},
    studentUserId: {type: String, required: true}
})

module.exports = studentCourses = mongoose.model("studentCourses", studentCoursesSchema);