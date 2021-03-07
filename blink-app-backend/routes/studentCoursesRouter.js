const studentCoursesRouter = require("express").Router();
const studentAuth = require("../middleware/studentAuth");
const studentCourses = require("../models/studentCoursesModel");
const Courses = require("../models/coursesModel");

studentCoursesRouter.post("/:id/:courseName/:courseCode/:creditHours", studentAuth, async (req, res) => {
    try {
        let courseName = req.params.courseName;
        let courseCode = req.params.courseCode;
        let creditHours = req.params.creditHours;

        const existingRegisteredCourse = await studentCourses.findOne({
            studentUserId: req.student,
            courseName: req.params.courseName,
            courseCode: req.params.courseCode,
            creditHours: req.params.creditHours
        });

        if(existingRegisteredCourse)
            return res.status(400).json({msg: "Course already registered."});
        
        const newStudentCourse = studentCourses({
            courseName,
            courseCode,
            creditHours,
            studentUserId: req.student
        });

        const registeredCourse = await newStudentCourse.save();
        res.json(registeredCourse);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

studentCoursesRouter.get("/registered", studentAuth, async (req, res) => {
    const registeredCourses = await studentCourses.find({studentUserId: req.student});
    res.json(registeredCourses);
});

studentCoursesRouter.delete("/:id", studentAuth, async (req, res) => {
    const studentCourse = await studentCourses.findOne({studentUserId: req.student, _id: req.params.id});
    if (!studentCourse)
        return res.status(400).json({msg: "Course not found."});
    
    const deletedStudentCourse = await studentCourses.findByIdAndDelete(req.params.id);
    res.json(deletedStudentCourse);
});

module.exports = studentCoursesRouter;