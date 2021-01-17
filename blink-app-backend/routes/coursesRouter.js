const coursesRouter = require("express").Router();
const Courses = require("../models/coursesModel");

coursesRouter.post("/", async (req, res) => {
    try {
        let {courseName, courseCode, creditHours} = req.body;

        if(!courseName || !courseCode || !creditHours)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const existingCourse = await Courses.findOne({courseName: courseName, courseCode: courseCode});

        if(existingCourse)
            return res.status(400).json({msg: "Course already exists."});
        
        const newCourse = Courses({
            courseName,
            courseCode,
            creditHours
        });

        const addedCourse = await newCourse.save();
        res.json(addedCourse);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

coursesRouter.get("/added", async (req, res) => {
    const addedCourses = await Courses.find();
    res.json(addedCourses);
});

coursesRouter.delete("/:id", async (req, res) => {
    const Course = await Courses.findOne({_id: req.params.id});
    if (!Course)
        return res.status(400).json({msg: "Course not found."});
    
    const deletedCourse = await Courses.findByIdAndDelete(req.params.id);
    res.json(deletedCourse);
});

module.exports = coursesRouter;