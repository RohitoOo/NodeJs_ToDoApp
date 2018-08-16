const express = require('express');
const toDoController = require('./controllers/toDoController')


const app = express();

// Set Template Engine EJS
app.set('template engine' , 'ejs');


//Set Up Static Files
app.use(express.static('./public') )

// Controllers
toDoController(app);

// Liten to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('We Are Live On Port : ' + port )
})


// This App is using an MVC Architecture
// Model View Controller
