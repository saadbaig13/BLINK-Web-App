const announcementRouter = require("express").Router();
const Announcements = require("../models/announcementModel");
const studentAuth = require("../middleware/studentAuth");
const studentCourses = require("../models/studentCoursesModel");

announcementRouter.post("/:courseName", async (req, res) => {
    try {
        let {announcementTitle, announcementDesc} = req.body;
        let courseName = req.params.courseName;

        if(!announcementTitle || !announcementDesc)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const newAnnouncement = Announcements({
            announcementTitle,
            announcementDesc,
            courseName
        });

        const addedAnnouncement = await newAnnouncement.save();
        res.json(addedAnnouncement);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

announcementRouter.get("/added", async (req, res) => {
    const addedAnnouncements = await Announcements.find();
    res.json(addedAnnouncements);
});

announcementRouter.get("/student/added", studentAuth, async (req, res) => {
    const registeredCourses = await studentCourses.find({studentUserId: req.student}, {_id:0, courseName:1});
    const registeredCoursesArray = registeredCourses.map(x=>x.courseName);
    const addedAnnouncements = await Announcements.find({courseName: {$in: registeredCoursesArray}});
    res.json(addedAnnouncements);
});

announcementRouter.delete("/:id", async (req, res) => {
    const Announcement = await Announcements.findOne({_id: req.params.id});
    if (!Announcement)
        return res.status(400).json({msg: "Announcement not found."});
    
    const deletedAnnouncement = await Announcements.findByIdAndDelete(req.params.id);
    res.json(deletedAnnouncement);
});

module.exports = announcementRouter;