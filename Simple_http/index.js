const http = require("http");
const fs = require('fs/promises')
const path = require("path");

fs.writeFile(path.join(__dirname,"index.html"),`<h1> Hello World </h1>\n<p> This is Abhishek... </p>`,"utf-8");

const server = http.createServer(async(req,res) => {
    res.writeHead(200,"Content-type: text/html")
    res.end(
       await fs.readFile("index.html",(err) => {
        console.log(err);
       })
    );
});

server.listen(5000, () => console.log("Server is up at port 5000"));