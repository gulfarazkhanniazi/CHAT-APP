const jwt = require("jsonwebtoken")

const generator = (userId, res) => {
    const token = jwt.sign(userId, process.env.jwtSecretKey, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.nodeENV !== "development"
    })
}

module.exports = generator;