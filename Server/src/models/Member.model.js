const mongoose = require('mongoose')
const {Schema} = mongoose

const MemberSchema = new Schema({
  firstName: {type: String, required: [true, "First Name is required"]},
  lastName: String,
  email: {type: String, required: [true, "Email is required"]},
  password: {type: String, required: [true, "Password is required"]},
  role: String,
  date:{type:Date, default: Date.now}
})

//convertir a modelo

module.exports = mongoose.model('member', MemberSchema)