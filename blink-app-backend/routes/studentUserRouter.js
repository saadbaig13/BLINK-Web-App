const studentRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const studentAuth = require("../middleware/studentAuth");
const studentUser = require("../models/studentUserModel");
const studentCourses = require("../models/studentCoursesModel");

studentRouter.post("/register", async (req, res) => {
    
    try {
        let {name, email, password, passwordCheck} = req.body;

        //validation

        if(!name || !email || !password || !passwordCheck)
            return res.status(400).json({msg: "Some fields are empty."});
        if(password.length < 5)
            return res.status(400).json({msg: "Password needs to be atleast 5 characters long."});
        if(password != passwordCheck)
            return res.status(400).json({msg: "Passwords do not match."});
        
        const existingStudent = await studentUser.findOne({email: email});

        if(existingStudent)
            return res.status(400).json({msg: "Email already exists."});
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newStudent = studentUser({
            email,
            password: passwordHash,
            name
        });

        const savedStudent = await newStudent.save();
        res.json(savedStudent);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

studentRouter.post("/login", async (req, res) => {
    
    try {
        let {email, password} = req.body;

        //validation

        if(!email || !password)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const student = await studentUser.findOne({email: email});
        if(!student)
            return res.status(400).json({msg: "Student email doesn't exists."});

        const isMatch = await bcrypt.compare(password, student.password);
        if(!isMatch)
            return res.status(400).json({msg: "Invalid credentials."});
        
        const token = jwt.sign({id: student._id}, process.env.JWT_SECRET);
        res.json({
            token,
            student: {
                id: student._id,
                name: student.name
            }
        });
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

studentRouter.delete("/delete", studentAuth, async (req, res) => {
    try{
        const deletedStudent = await studentUser.findByIdAndDelete(req.student);
        res.json(deletedStudent);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

studentRouter.post("/tokenIsValid", async (req, res) => {
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const student = await studentUser.findById(verified.id);
        if(!student) return res.json(false);

        return res.json(true);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

studentRouter.get("/", studentAuth, async (req, res) => {
    const student = await studentUser.findById(req.student);
    res.json({
        name: student.name,
        id: student._id
    });
});

studentRouter.get("/added", async (req, res) => {
    const addedStudents = await studentUser.find();
    res.json(addedStudents);
});

studentRouter.get("/added/:courseName", async (req, res) => {
    const registeredCourseStudents = await studentCourses.find({courseName: req.params.courseName}, {_id:0, studentUserId:1});
    const registeredCourseStudentsArray = registeredCourseStudents.map(x=>x.studentUserId);
    const addedStudents = await studentUser.find({_id: {$in: registeredCourseStudentsArray}});
    res.json(addedStudents);
});

module.exports = studentRouter;