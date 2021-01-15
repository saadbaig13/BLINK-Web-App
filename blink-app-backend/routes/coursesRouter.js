const coursesRouter = require("express").Router();
const studentAuth = require("../middleware/studentAuth");
const Course = require("../models/courseModel");

coursesRouter.post("/", studentAuth, async (req, res) => {
    try {
        let {courseName, courseCode, creditHours} = req.body;

        if(!courseName || !courseCode || !creditHours)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const newCourse = Course({
            courseName,
            courseCode,
            creditHours,
            studentUserId: req.student
        });

        const registeredCourse = await newCourse.save();
        res.json(registeredCourse);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

coursesRouter.get("/registered", studentAuth, async (req, res) => {
    const registeredCourses = await Course.find({studentUserId: req.student});
    res.json(registeredCourses);
});

coursesRouter.delete("/:id", studentAuth, async (req, res) => {
    const course = await Course.findOne({studentUserId: req.student, _id: req.params.id});
    if (!course)
        return res.status(400).json({msg: "Course not found."});
    
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    res.json(deletedCourse);
});

module.exports = coursesRouter;