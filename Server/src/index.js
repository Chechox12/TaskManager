//requerimos las dependencias necesarias
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

//Voy a configurar el puerto

app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/admin', require('./routes/Admin.routes'))
app.use('/member', require('./routes/Member.routes'))

app.listen(app.get('Port'), () => {
  console.log('Hi, I am the Server and i am listening on port', app.get('Port'))
})