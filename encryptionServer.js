const expess = require("express");
const cors = require("cors");
const crypto = require("crypto");
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
const app = expess();
const port = 5000;
// const port = process.env.PORT;


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
    },
    {
        id: 3,
        email: "lian@hotmail.com",
        password: "lian1212"
    },
    {
        id: 4,
        email: "bian@hotmail.com",
        password: "bian1212"
    }
]

const loginData = JSON.stringify(loginInfo);


app.use(cors());

app.get("/", cors(), (req, res) => {
    console.log("Home Page Is Running");
    res.send(`Server With The Port ${port} Is Running`)
})

// app.post("/data", cors(), (req, res) => {
//     console.log("data page is running");
    // const loginHash = crypto.createHash("sha256").update(process.env.KEY + loginData).digest("hex");
    // console.log(loginHash);
    // const data = JSON.stringify(loginHash);
    // localStorage.setItem('userdata', data)
// })

app.get("/encryption", cors(), (req, res) => {
    res.end("Encryption Page Is Running")
    console.log("api/data page is running");
    const loginHash = crypto.createHash("sha256").update(process.env.KEY + loginData).digest("hex");
    console.log(loginHash);
    const data = JSON.stringify(loginHash);
    localStorage.setItem('userdata', data)
})

app.listen(port, () => console.log(`the server listen to - http://localhost:${port}`));
