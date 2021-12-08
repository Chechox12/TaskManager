//Conexión base de datos

const mongoose = require('mongoose')

URI = ('mongodb+srv://ImTyrone:misiontic2022@taskmanager.ttaok.mongodb.net/TaskManager?retryWrites=true&w=majority')

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log('I am connected to the db:', db.connection.name))
.catch(error => console.log(error))

module.exports = mongoose
