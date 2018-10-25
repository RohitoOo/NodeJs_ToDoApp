var fs = require('fs');



var readMe = fs.readFile('readme.txt' , 'utf8' , (err, readMe) => {
  console.log("Async Call Non Blocking Code", readMe)
  fs.writeFileSync('writeMe.txt' ,  readMe, (err) => {
    console.log(err)
  })
})

var reamMeSync = fs.readFileSync('readme.txt' , 'utf8' );
console.log("Sync Call - Blocking Code", reamMeSync)