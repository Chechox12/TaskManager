const adminCtrl = {}
const Admin = require('../models/Admin.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

adminCtrl.create = async (request, response) => {
  const {firstName, lastName, email, password, role} = request.body
  const NewAdmin = new Admin({
    firstName,
    lastName,
    email,
    password,
    role
  })

  const emailAdmin = await Admin.findOne({email:email})
  if (emailAdmin) {
    response.json({
      message: 'this email already has an account'
    })
  }

  else {

    NewAdmin.password = await bcrypt.hash(password, 10)
    const token = jwt.sign({_id: NewAdmin._id}, 'Secret')
    await NewAdmin.save()
    response.json({
      message: 'Welcome',
      id: NewAdmin._id,
      name: NewAdmin.name,
      token
    })
  }
}

adminCtrl.login = async(request, response) => {
  const {email, password} = request.body
  const admin = await Admin.findOne({email:email})
  if (!admin) {

    return response.json({
      message: 'Please enter a correct email address'
    })
  }

  const match = await bcrypt.compare(password, admin.password)

  if (match) {
    const token = jwt.sign({_id: admin._id}, 'Secret')
    response.json ({
      message: `Hello, welcome back!`,
      id: admin.id,
      name: admin.name,
      token
    })
  }

  else {
    response.json({
      message: 'invalid password'
    })
  }
}

adminCtrl.update = async (request, response) => {
  const id = request.params.id
  await Admin.findByIdAndUpdate({_id: id}, request.body)
  response.json ({
    message: "admin updated"
  })
}

module.exports = adminCtrl

