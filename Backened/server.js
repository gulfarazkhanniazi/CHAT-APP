const express = require('express')
require("./db/connection")
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;
app.use(cookieParser());

const authRouter  = require('./routes/authRoutes')
const messageRoute  = require('./routes/messageRoute')
const userRoute  = require('./routes/userRouutes')


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // if you are sending cookies with requests
}));


app.use("/auth", authRouter);
app.use("/message", messageRoute);
app.use("/user", userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));