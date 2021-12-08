const memberCtrl = {}
const Member = require('../models/Member.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

memberCtrl.create = async (request, response) => {
  const {firstName, lastName, email, password, role} = request.body
  const NewMember = new Member({
    firstName,
    lastName,
    email,
    password,
    role
  })

  const emailMember = await Member.findOne({email:email})
  if (emailMember) {
    response.json({
      message: 'this email already has an account'
    })
  }

  else {

    NewMember.password = await bcrypt.hash(password, 10)
    const token = jwt.sign({_id: NewMember._id}, 'Secret')
    await NewMember.save()
    response.json({
      message: 'Welcome',
      id: NewMember._id,
      name: NewMember.name,
      token
    })
  }
}

memberCtrl.login = async(request, response) => {
  const {email, password} = request.body
  const member = await Member.findOne({email:email})
  if (!member) {

    return response.json({
      message: 'Please enter a correct email address'
    })
  }

  const match = await bcrypt.compare(password, member.password)

  if (match) {
    const token = jwt.sign({_id: member._id}, 'Secret')
    response.json ({
      message: `Hello ${member.name}, welcome back!`,
      id: member.id,
      name: member.name,
      token
    })
  }

  else {
    response.json({
      message: 'invalid password'
    })
  }
}

memberCtrl.list = async (request, response) => {
  const res = await Member.find()
  response.json(res)
}

memberCtrl.listId = async (request, response) => {
  const id = request.params.id
  const res = await Member.findById({_id: id})
  response.json(res)
}

memberCtrl.delete = async (request, response) => {
  const id = request.params.id
  const res = await Member.findByIdAndRemove({_id: id})
  response.json ({
    message: "member deleted"
  })
}

memberCtrl.update = async (request, response) => {
  const id = request.params.id
  await Member.findByIdAndUpdate({_id: id}, request.body)
  response.json ({
    message: "member updated"
  })
}

memberCtrl.findByRole = async (request, response) => {
  const role = request.params.role

  try {
    const res = await Member.find({role:role})
    response.json(res)
  } catch (error) {
    return response.status(400).json({
      message: 'something went wrong',
      error
    })
  }
}

module.exports = memberCtrl