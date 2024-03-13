const Students = require('../model/students')
const Mark = require('../model/mark')


exports.student_Add = async (req, res) => {
    try {
        const { name, rollNo } = req.body

        if (!name && !rollNo) {
            res.json({
                status: 'fail',
                responses: 400,
                message: "All feilds are required"
            })
        } else {
            await Students.create({ name, rollNo }, function (err, data) {

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
                        message: "Student Added Successfully!",
                        data: data,
                    })
                }

            })

        }
    } catch (error) {
        console.log("student_Add:___________ ", error);
    }
}


exports.getAllStudentsList = async (req, res) => {
    try {
        await Students.find({}, function (err, data) {
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
                    message: "Fetched all the Student details Successfully!",
                    data: data,
                })
            }
        })
    } catch (error) {
        console.log("getAllStudentsList:___________ ", error);
    }
}


// STUDENT MARK ADDED

exports.studentMarkAdded = async (req, res) => {
    try {
        const { studentId, Tamil, English, Maths, Science, SocialScience } = req.body

        if (!studentId) {
            res.json({
                status: 'fail',
                responses: 400,
                message: "All feilds are required"
            })
        } else {
            var Total = Tamil + English + Maths + Science + SocialScience

            var Percentage = (Total / 500) * 100;

            await Mark.create({ studentId, Tamil, English, Maths, Science, SocialScience, Total, Percentage }, function (err, data) {

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
                        message: "Student Mark Added Successfully!",
                        data: data,
                    })
                }

            })

        }
    } catch (error) {
        console.log("studentMarkAdded:___________ ", error);
    }
}

// STUDENT MARK GET ALL

exports.getAllMarksList = async (req, res) => {
    try {
        await Mark.find({}, function (err, data) {
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
                    message: "Fetched all the mark details Successfully!",
                    data: data,
                })
            }
        })
    } catch (error) {
        console.log("getAllStudentsList:___________ ", error);
    }
}

exports.studentMarkUpdated = async (req, res) => {
    try {
        const { _id, Tamil, English, Maths, Science, SocialScience } = req.body

        if (!_id) {
            res.json({
                status: 'fail',
                responses: 400,
                message: "All feilds are required"
            })
        } else {
            var Total = Tamil + English + Maths + Science + SocialScience

            var Percentage = (Total / 500) * 100;

            await Mark.findByIdAndUpdate({ _id: _id }, { Tamil, English, Maths, Science, SocialScience, Total, Percentage }, async function (err, data) {
                if (err) {
                    res.json({
                        status: 'fail',
                        responescode: 500,
                        message: "error ocuured!"
                    })
                } else {
                    const MarksUpdated = await Mark.findOne({ _id: _id })
                    res.json({
                        status: 'success',
                        responescode: 200,
                        message: "Student Mark Added Successfully!",
                        data: MarksUpdated,
                    })
                }
            })

        }
    } catch (error) {
        console.log("studentMarkAdded:___________ ", error);
    }
}


exports.getPassMarkDetails = async (req, res) => {
    try {
        await Mark.find({ Percentage: { $gt: 50 } }, function (err, data) {
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
                    message: "All Passed Student List Get Successfully!",
                    data: data,
                })
            }
        })
    } catch (error) {
        console.log("getAllStudentsList:___________ ", error);
    }
}


exports.getFailedMarkDetails = async (req, res) => {
    try {
        await Mark.find({ Percentage: { $lt: 50 } }, function (err, data) {
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
                    message: "All Failed Student List Get Successfully!",
                    data: data,
                })
            }
        })
    } catch (error) {
        console.log("getFailedMarkDetails:___________ ", error);
    }
}
