const http = require("http");
const port = 3000;
const studentdata = require("./db")
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
console.log(studentdata);

const server = http.createServer((req, res) => {
    if (req.url == "/api/data") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(studentInfo))
    }
});

server.listen(port, () => {
    console.log(`the server listen to - http://localhost:${port}`);
});
