const fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMeBuffered.txt' , 'utf8');


// Listening on Data Event 
// myReadStream.on('data' , (chunk) => {
//     console.log("Chunk Received")
//     console.log(chunk)
//     myWriteStream.write(chunk)
// })

// Easier Way Using Pipe 

myReadStream.pipe(myWriteStream)