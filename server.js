const http = require('http')

const server = http.createServer( (req,res) => {
    console.log("Server Is Created And Running")
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end("Rohito")

    // Sending Data via res can be Optimized By Using Streams 
});

server.listen(3000, () => {
    console.log("We are Live on port 3000")
})