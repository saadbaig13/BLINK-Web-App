const attendanceRouter = require("express").Router();
const Attendance = require("../models/attendanceModel");
const studentAuth = require("../middleware/studentAuth");

attendanceRouter.post("/:courseName/:id/:attendanceStatus", async (req, res) => {
    try {
        let attendanceStatus = req.params.attendanceStatus;
        let courseName = req.params.courseName;
        let studentUserId = req.params.id;
        let attendanceTime = new Date().toDateString();
        
        const newAttendance = Attendance({
            attendanceStatus,
            attendanceTime,
            courseName,
            studentUserId
        });

        const addedAttendance = await newAttendance.save();
        res.json(addedAttendance);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

attendanceRouter.get("/studentAdded", studentAuth, async (req, res) => {
    const addedStudentAttendance = await Attendance.find({studentUserId: req.student});
    res.json(addedStudentAttendance);
});

attendanceRouter.get("/added", async (req, res) => {
    const addedAttendance = await Attendance.find();
    res.json(addedAttendance);
});

attendanceRouter.delete("/:id", async (req, res) => {
    const Attendances = await Attendance.findOne({_id: req.params.id});
    if (!Attendances)
        return res.status(400).json({msg: "Attendance not found."});
    
    const deletedAttendance = await Attendance.findByIdAndDelete(req.params.id);
    res.json(deletedAttendance);
});

module.exports = attendanceRouter;