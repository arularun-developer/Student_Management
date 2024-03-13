const mongoose = require('../config/db')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    rollNo: {
        type: Number,
    },
    class: {
        type: String,
        default:'8th class'
    }
},
    { timestamps: true },
)
module.exports = mongoose.model('Students', studentSchema, 'Students',)


