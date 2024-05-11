const jwt = require("jsonwebtoken");

const tokenGenerator = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d"
    });

    res.cookie("jwttoken", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        sameSite: "strict",
        secure: false,

    });
};

module.exports = tokenGenerator;
