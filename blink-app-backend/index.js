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

//iizz0pzQ6LHHdCKj
//mongodb+srv://saadblink:<password>@cluster0.0jk1l.mongodb.net/<dbname>?retryWrites=true&w=majority