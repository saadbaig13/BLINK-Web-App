const mongoose = require("mongoose");

const teacherUserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
})

module.exports = teacherUser = mongoose.model("teacher", teacherUserSchema);