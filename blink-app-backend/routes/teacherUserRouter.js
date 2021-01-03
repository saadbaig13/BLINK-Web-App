const teacherRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const teacherAuth = require("../middleware/teacherAuth");
const teacherUser = require("../models/teacherUserModel");

teacherRouter.post("/register", async (req, res) => {
    
    try {
        let {name, email, password, passwordCheck} = req.body;

        //validation

        if(!name || !email || !password || !passwordCheck)
            return res.status(400).json({msg: "Some fields are empty."});
        if(password.length < 5)
            return res.status(400).json({msg: "Password needs to be atleast 5 characters long."});
        if(password != passwordCheck)
            return res.status(400).json({msg: "Passwords do not match."});
        
        const existingTeacher = await teacherUser.findOne({email: email});

        if(existingTeacher)
            return res.status(400).json({msg: "Email already exists."});
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newTeacher = teacherUser({
            email,
            password: passwordHash,
            name
        });

        const savedTeacher = await newTeacher.save();
        res.json(savedTeacher);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

teacherRouter.post("/login", async (req, res) => {
    
    try {
        let {email, password} = req.body;

        //validation

        if(!email || !password)
            return res.status(400).json({msg: "Some fields are empty."});
        
        const teacher = await teacherUser.findOne({email: email});
        if(!teacher)
            return res.status(400).json({msg: "Teacher email doesn't exists."});

        const isMatch = await bcrypt.compare(password, teacher.password);
        if(!isMatch)
            return res.status(400).json({msg: "Invalid credentials."});
        
        const token = jwt.sign({id: teacher._id}, process.env.JWT_SECRET);
        res.json({
            token,
            teacher: {
                id: teacher._id,
                name: teacher.name
            }
        });
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

teacherRouter.delete("/delete", teacherAuth, async (req, res) => {
    try{
        const deletedTeacher = await teacherUser.findByIdAndDelete(req.teacher);
        res.json(deletedTeacher);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

teacherRouter.post("/tokenIsValid", async (req, res) => {
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const teacher = await teacherUser.findById(verified.id);
        if(!teacher) return res.json(false);

        return res.json(true);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
});

teacherRouter.get("/", teacherAuth, async (req, res) => {
    const teacher = await teacherUser.findById(req.teacher);
    res.json({
        name: teacher.name,
        id: teacher._id
    });
});

module.exports = teacherRouter;