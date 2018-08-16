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


var datas = [
  {item: 'Optimize React Redux Project'},
  {item: 'Buy cookies'},
  {item: 'Pay Phone bill'},
  {item: 'Organize trello board'},
  {item: 'Call Yo Mama'},
  {item: 'Read the JS book'},

]

module.exports = (app) => {

app.get('/todo' , (req,res) => {

  // get data from Database - MongoDB Mlab
    // Todo.find({} , (err, data) => {
    //   if(err){
    //     console.log(err)
    //   }else {
    //     res.render('todo' , {
    //       todos : datas
    //     })
    //   }
    // })

    res.render('todo' , {
      todos : datas
    })

});

app.post('/todo' , urlencoderParser , (req,res) => {

  datas.push(req.body);
  res.json(datas)

})

app.delete('/todo/:item' , (req,res) =>  {

datas = datas.filter( function (todo) {
   return todo.item.replace(/ /g , "-") !== req.params.item
})

  res.json(datas)
})

}
