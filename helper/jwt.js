const jwt = require('jsonwebtoken')
const path = require('path')
const buffer = require('crypto')
var key = buffer.toString('hex');

const publicKey = process.env.JWT_SECRET;
const options = { expiresIn: '5h' };

module.exports.signJwt = function (payload) {
    let data = { _id: payload }
    try {
        return new Promise((resolve, reject) => {
            jwt.sign(data, publicKey, options, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    } catch (error) {
        console.log("signJwt____________", error);
    }
}



module.exports.Jwt_verify_token = function (req, res, next) {
    try {
        var token = req.headers.authorization
        if (!token) {
            return res.status(401).send('Invalid token.');
        }
        const decoded = jwt.verify(token, publicKey);
        if (decoded)
            req._id = decoded._id;
        next();
    } catch (error) {
        console.log("Jwt_verify_token___________", error);
    }
}

