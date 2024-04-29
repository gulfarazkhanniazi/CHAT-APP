const express = require('express')
require("./db/connection")
const env = require("dotenv")
const cookieParser = require('cookie-parser')

const authRouter  = require('./routes/authRoutes')
const messageRoute  = require('./routes/messageRoute')
const userRoute  = require('./routes/userRouutes')

const app = express();
const port = 3000;
env.config();

app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/message", messageRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));