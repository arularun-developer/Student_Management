const express = require('express');
const app = express()
const cors = require('cors')
const logger = require('morgan');
require('dotenv').config()
const userRouter = require('./router/users')
const studentRouter = require('./router/student')


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'));

app.use('/', userRouter)
app.use('/student', studentRouter)


app.use('/', function (req, res) {
  res.json({ status: 1, code: 200, message: "Backend Server Running..!" })
});

app.use('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization ,Accept');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Expose-Headers', 'Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.listen(process.env.PORT, () => {
  console.log(`Express Backend server Run stared ${process.env.PORT}`);
})

module.exports = app;