const jwt = require('jsonwebtoken');
const envVariables = require('../configs/envVariables');

const authenticateUser = (req, res, next) => {
    try {
        const incomingCookie = req.cookies?.accessToken;
        if (!incomingCookie) {
            return res.status(400).json({
                success: false,
                message: "no token provided",
            });
        }
        const verifyToekn = jwt.verify(incomingCookie, envVariables.accessToken);
        if (!verifyToekn) {
            return res.status(400).json({
                success: false,
                message: "malformed token or token expired",
            });
        }
        req.USER = verifyToekn;
        next();

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: "issue in verifying token",
        });
    }
};

module.exports = authenticateUser;