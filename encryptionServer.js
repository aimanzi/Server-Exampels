const expess = require("express");
const cors = require("cors");
const crypto = require("crypto");
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
const app = expess();
// const port = process.env.PORT;
const port = 3000;

const loginInfo = [
    {
        id: 1,
        email: "aiman@hotmail.com",
        password: "aiman1212"
    },
    {
        id: 2,
        email: "eiman@hotmail.com",
        password: "eiman1212"
    }]

const loginData = JSON.stringify(loginInfo);
console.log(loginData);

app.get("/", (req, res) => {
    res.send(`Server With The Port ${port} Is Running`)
})

app.get("/api/data", (req, res) => {
    res.send(`Hellow I'm Encryption Your Mail And Password`)
    const loginHash = crypto.createHash("sha256").update(process.env.KEY + loginInfo).digest("hex");
    console.log(loginHash);
    const data = JSON.stringify(loginHash);
    localStorage.setItem('userdata', data)
})
app.listen(port, () => console.log(`the server listen to - http://localhost:${port}`));
