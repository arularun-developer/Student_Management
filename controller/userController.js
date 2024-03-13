const USERS = require('../model/users')
const AuthJWT = require('../helper/jwt')

exports.user_regsiter = async (req, res) => {
    let data = req.body
    USERS.findOne({ email: data.email }, function (err, userDetails) {
        if (userDetails) {
            res.json({
                status: 'fail',
                responses: 400,
                message: "Already Register UserData"
            })
        } else {
            USERS.create({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
            }, async (err, userInsetData) => {
                if (err) {
                    res.json({
                        status: 'fail',
                        responescode: 500,
                        message: "error ocuured!"
                    })
                } else {
                    let token_data = await AuthJWT.signJwt(userInsetData._id)
                    res.json({
                        status: 'success',
                        responescode: 200,
                        message: "User Regsiter Successfully!",
                        data: userInsetData,
                        token: token_data
                    })
                }

            })
        }
    })
}

exports.user_login = (req, res) => {
    let data = req.body
    USERS.findOne({
        email: data.email,
    }, async function (err, userData) {
        if (!userData) {
            res.json({
                status: 'fail',
                responescode: 400,
                message: "Invaild Email"
            })
        } else {
            if (data.password != userData.password) {
                res.json({
                    status: 'fail',
                    responescode: 400,
                    message: "Invaild Password"
                })
            } else {
                let token_data = await AuthJWT.signJwt(userData._id)
                res.json({
                    status: 'success',
                    responescode: 200,
                    message: "User Login Success",
                    data: userData,
                    token: token_data
                })
            }
        }
    })
}

exports.userDeleted = async (req, res) => {
    try {
        const userId = req.query.id;
        USERS.deleteOne({ _id: userId }, function (err, data) {
            if (err) {
                res.json({
                    status: 'fail',
                    responescode: 500,
                    message: "error ocuured!"
                })
            } else {
                res.json({
                    status: 'success',
                    responescode: 200,
                    message: "User Deleted Successfully!",
                    data: data
                })
            }
        })
    } catch (error) {
        console.log("userDeleted:______________ ", error);
    }
}

