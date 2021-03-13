const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
    announcementTitle: {type: String, required: true},
    announcementDesc: {type: String, required: true},
    courseName: {type: String, required: true}
})

module.exports = announcements = mongoose.model("announcements", announcementSchema);