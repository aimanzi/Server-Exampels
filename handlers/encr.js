const crypto = require("crypto"); // enciding 

function mainPage(req, res) {
    console.log("Home Page Is Running");
    res.end("<h1>Wellcom To Home Page</h1><h1>The Server Is Working</h1>")
}

function encrFunction(req, res) {
    console.log("Posring From FrontEnd Is Running");
    let mail = req.body.mail;
    let password = req.body.password;
    console.log(mail);
    console.log(password);
    const mailHash = crypto.createHash("sha256").update(process.env.KEY + mail).digest("hex");
    console.log(mailHash);
    const passwordHash = crypto.createHash("sha256").update(process.env.KEY + password).digest("hex");
    console.log(passwordHash);
    res.end("Mission Completion")
}



module.exports = { mainPage, encrFunction }
