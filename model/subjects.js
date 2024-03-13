const mongoose = require('../config/db')

const subjectsSchema = mongoose.Schema({
    subjects: {
        type: Array,
        default: ['Tamil', "English", 'Maths', 'Science', 'SocialScience']
    },
},
    { timestamps: true },

)
module.exports = mongoose.model('Subjects', subjectsSchema, 'Subjects')


