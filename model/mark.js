const mongoose = require('../config/db')

const marksSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Types.ObjectId,
        ref: 'studentId',
        default: ''
    },
    
    // 'Tamil', "English", 'Maths', 'Science', 'SocialScience'
    Tamil: {
        type: Number,
        default: 0
    },
    English: {
        type: Number,
        default: 0
    },
    Maths: {
        type: Number,
        default: 0
    },
    Science: {
        type: Number,
        default: 0
    },
    SocialScience: {
        type: Number,
        default: 0
    },
    Total: {
        type: Number,
        default: 0
    },
    Percentage:{
        type: Number,
        default: 0
    }
},
    { timestamps: true },

)
module.exports = mongoose.model('Mark', marksSchema, 'Mark',)


