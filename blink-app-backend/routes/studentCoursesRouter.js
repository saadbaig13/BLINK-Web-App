const studentCoursesRouter = require("express").Router();
const studentAuth = require("../middleware/studentAuth");
const studentCourses = require("../models/studentCoursesModel");
const Courses = require("../models/coursesModel");

studentCoursesRouter.post("/", studentAuth, async (req, res) => {
    try {
        let {courseName, courseCode, creditHours} = req.body;

        if(!courseName || !courseCode || !creditHours)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const existingCourse = await Courses.findOne({courseName: courseName, courseCode: courseCode});

        if(!existingCourse)
            return res.status(400).json({msg: "Course doesn't exists."});
        
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