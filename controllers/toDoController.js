// routes, pass data to list

// Request Handlers

module.exports = (app) => {

app.get('/todo' , (req,res) => {
  res.render('todo')
})

app.post('/todo' , (req,res) => {
  res.render()
})

app.delete('/todo' , (req,res) =>  {
  res.render()
})

}
