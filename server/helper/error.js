const crypto = require("crypto");

exports.sendError = (res, message, status=401) => {
    res
        .status(status)
        .json({
            success: false,
            message,
        });
}

exports.createRandomBytes = () => new Promise((resolve, reject) => {
    crypto.randomBytes(30, (err, buff) => {
        if(err) reject(err);
        
        const token = buff.toString('hex');
        resolve(token);
    }) 
})