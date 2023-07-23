//DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const views = require('express-react-views')

//CONFIGURATION 
require('dotenv').config()
const app = express()

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', views.createEngine())
app.use(express.urlencoded({extended: true}))

//CONTROLLERS
const toDoController = require('./controllers/todo_controller')
app.use('toDos', todosController)

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT).`
  })