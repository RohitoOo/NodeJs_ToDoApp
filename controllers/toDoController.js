// routes, pass data to list

// Request Handlers

const bodyParser = require('body-parser')

// Body Parser Middleware

var urlencoderParser = bodyParser.urlencoded({extended : false })

// Connect To Cloud Database [ Mongodb ] via Mongoose

const mongoose = require('mongoose')

mongoose.connect('mongodb://rohito:nodejs1@ds123822.mlab.com:23822/nodejs_todo' , { useNewUrlParser: true })

// Create Schema And Model For Transfering Data To and From Database

var todoSchema = new mongoose.Schema({
  item : String
})


var Todo = mongoose.model('Todo' , todoSchema)



// Saved Test Data To Mlab

// var item1 = Todo({
//   item : "Connect MongoDB Database"
// }).save( (err) => {
// if(err){
//   console.log(err)
// }else {
//   console.log('Item saved to Database')
// }
// })


// var datas = [
//   {item: 'Optimize React Redux Project'},
//   {item: 'Buy cookies'},
//   {item: 'Pay Phone bill'},
//   {item: 'Organize trello board'},
//   {item: 'Call Yo Mama'},
//   {item: 'Read the JS book'},
//
// ]

module.exports = (app) => {

app.get('/todo' , (req,res) => {

  // get data from Database - MongoDB Mlab
    Todo.find({} , (err, data) => {
      if(err){
        console.log(err)
      }else {
        res.render('todo' , {
          todos : data
        })
      }
    })

});

app.post('/todo' , urlencoderParser , (req,res) => {

// get current Data and Add new Data to MongoDB

var newTodo = Todo(req.body).save( (err,data)=> {
  if(err){
    console.log(err)
  }else {
    // send Data Back to Front End Via Jquery Ajax Handler
    res.json(data)
  }
})

})

app.delete('/todo/:item' , (req,res) =>  {


// Delete Selected item From Data Base

Todo.find({item: req.params.item.replace (/\-/g , " ") }).remove( (err,data)=> {
  if(err){
    console.log(err)
  }else {
    res.json(data)
  }
})

})

}
