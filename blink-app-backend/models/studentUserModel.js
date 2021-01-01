const mongoose = require("mongoose");

const studentUserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
})

module.exports = studentUser = mongoose.model("student", studentUserSchema);