const jwt = require("jsonwebtoken");

const { sendError } = require("../helper/error");
const User = require("../models/user");

exports.isAuth = async (req, res, next) => {
        // console.log(req.headers);
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        try {
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            const user = await User.findById(decode.userId);
            if (!user) {
                return sendError(res, "Unauthorized Access!");
            }

            req.user = user;
            next();
        } catch (error) {
            if (error.name === "JsonWebTokenError") {
                return sendError(res, "Unauthorized Access!");
            }
            if (error.name === "TokenExpiredError") {
                return sendError(res, "Session Expired try Sign-IN!");
            }
            
            sendError(res, "Internal server Error!");
        }
    } else {
        return sendError(res, "Unauthorized Access!");
    }
};
