var fs = require('fs');

var readMe = fs.readFile('readme.txt' , 'utf8' , (err, readMe) => {
  console.log(readMe)

  fs.writeFile('writeMe.txt' , readMe)
})
