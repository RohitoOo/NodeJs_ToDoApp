// routes, pass data to list

module.exports = (app) => {

app.get('/todo' , (req,res) => {
  console.log('Test Get Route')
  // res.render()
})

app.post('/todo' , (req,res) => {
  res.render()
})

app.delete('/todo' , (req,res) =>  {
  res.render()
})

}
