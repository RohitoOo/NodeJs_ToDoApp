// routes, pass data to list

// Request Handlers


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
