const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/chatapp")
.then(()=>console.log("Connect to Database"))
.catch(()=>console.log("Not Connected to Database"))