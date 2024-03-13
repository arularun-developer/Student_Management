const MONGOOSE = require('mongoose')
MONGOOSE.set('strictQuery', false);

URL = process.env.MONGOOSE_DB;
// console.log("DB URL:______________ ", URL);

MONGOOSE.connect(URL, (err, db) => {
    if (err) throw err
    else {
        console.log('db connect sucessfully...!')
    }
})

module.exports = MONGOOSE