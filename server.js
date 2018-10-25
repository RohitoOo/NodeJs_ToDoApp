const http = require('http')

const server = http.createServer( (req,res) => {

    console.log("Server Is Created And Running")
    // const myObj = {
    //     name : "Rohito"
    // }
    // res.end(JSON.stringify(myObj))

    // Sending Data via res can be Optimized By Using Streams 


    // Basic Route 


    if (req.url === "/api") {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        const myObj = {
            name : "Rohito",
            route: req.url
        }
        res.end(JSON.stringify(myObj))
    }

    if (req.url === "/err") {
        res.writeHead(404, {'Content-Type' : 'application/json'})
        const myObj = {
            name : "Rohito",
            route: req.url,
            Status: "Error"
        }
        res.end(myObj.toString())
    }

    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        const myObj = {
            name : "Rohito",
            route: req.url
        }
        res.end(JSON.stringify(myObj))
    } else {
     
            res.writeHead(200, {'Content-Type' : 'application/json'})
            const myObj = {
                name : "Rohito",
                route: req.url
            }
            res.end(JSON.stringify(myObj))
    }
});

server.listen(3000, () => {
    console.log("We are Live on port 3000")
})