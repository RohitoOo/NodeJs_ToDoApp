const express = require('express');
const toDoController = require('./controllers/toDoController')


const app = express();

// Set Template Engine EJS
app.set('view engine' , 'ejs');


//Set Up Static Files - Required Middleware
app.use(express.static('./public') )

// Controllers Function ( Control Part of MVC Architecture )
toDoController(app);

// Liten to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('We Are Live On Port : ' + port )
})

app.get('*',function (req, res) {
        res.redirect('/todo');
    });

// This App is using an MVC Architecture
// Model View Controller
