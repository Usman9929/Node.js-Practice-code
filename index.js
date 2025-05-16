const http = require('http')

http.createServer((req, resp) => {
    resp.write("<h1> Hello World this is my first Node Js server")
    resp.end()
}).listen(4500)