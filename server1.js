const http = require("http");
const port = 3000;
const studentInfo = [
    {
        id: 1,
        name: "aiman",
        email: "aiman@hotmail.com"
    },
    {
        id: 2,
        name: "eiman",
        email: "eiman@hotmail.com"
    },
]
console.log(studentInfo);

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("<h1>Wellcom to Home Page</h1>")
    } else {
        if (req.url == "/api/data") {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(studentInfo))
        }
    }
});

server.listen(port, () => {
    console.log(`the server listen to - http://localhost:${port}`);
});
