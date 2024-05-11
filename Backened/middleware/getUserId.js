const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        console.log("cookie:::", token);
        if (!token) {
            return res.status(401).send({ error: "Please provide authentication token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).send({ error: "Unauthorized Token" });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send({ error: "Authentication failed" });
    }
};

module.exports = fetchUser;
