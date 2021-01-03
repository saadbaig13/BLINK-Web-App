const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//express

const app = express();
app.use(express.json());
app.use(cors());

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