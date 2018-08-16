// routes, pass data to list

// Request Handlers

const mongoose = require('mongoose')

// Connect To Cloud Database [ Mongodb ] via Mongoose
mongoose.connect('mongodb://rohito:nodejs1@ds123822.mlab.com:23822/nodejs_todo')

// Create Schema For Transfering Data To and From Database

var todoSchema = new mongoose.Schema({
  item : String
})

// Create Model 
var ToDo = mongoose.model('Todo' , todoSchema)


var data = [
  {item: 'Optimize React Redux Project'},
  {item: 'Buy cookies'},
  {item: 'Pay Phone bill'},
  {item: 'Organize trello board'},
  {item: 'Call Yo Mama'},
  {item: 'Read the JS book'},

]



module.exports = (app) => {

app.get('/todo' , (req,res) => {
  res.render('todo' , {
    todos : data
  })
})

app.post('/todo' , (req,res) => {
  res.render()
})

app.delete('/todo' , (req,res) =>  {
  res.render()
})

}
