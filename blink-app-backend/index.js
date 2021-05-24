const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//express

const app = express();
const http = require('http').createServer(app);;
const io = require('socket.io')(http);
app.use(express.json());
app.use(cors());

//socket io

io.on('connection', (socket)=> {
    console.log('User Online');
    socket.on('canvas-data', (data)=> {
        socket.broadcast.emit('canvas-data', data);
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started running on port: ${PORT}`));

//mongoose

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},
(err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
});

//routes

app.use("/student", require("./routes/studentUserRouter"));
app.use("/teacher", require("./routes/teacherUserRouter"));
app.use("/courses", require("./routes/coursesRouter"));
app.use("/studentCourses", require("./routes/studentCoursesRouter"));
app.use("/announcement", require("./routes/announcementRouter"));
app.use("/attendance", require("./routes/attendanceRouter"));