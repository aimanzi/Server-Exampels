const expess = require("express");
const cors = require("cors");
const crypto = require("crypto"); // enciding 
const app = expess();
const dotenv = require("dotenv"); //to activate .env option
dotenv.config("/.env");
const port = process.env.PORT;
var bodyParser = require('body-parser'); //to reciving data from frontEnd as JSON file
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("", (req, res) => {
    console.log("Home Page is running");
    res.send("Home Page is running")
})
app.post("/data", (req, res) => {
    console.log("Post Data From FrontEnd page is running");
    let mail = req.body.mail;
    let password = req.body.password;
    console.log(mail);
    console.log(password);
    const mailHash = crypto.createHash("sha256").update(process.env.KEY + mail).digest("hex");
    console.log(mailHash);
    const passwordHash = crypto.createHash("sha256").update(process.env.KEY + password).digest("hex");
    console.log(passwordHash);
    res.end("Mission Completion")
})

app.listen(port, () => console.log(`the server listen to http://localhost:${port}`));
