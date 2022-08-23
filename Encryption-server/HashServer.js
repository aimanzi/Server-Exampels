const expess = require("express");
const crypto = require("crypto");
const app = expess();
// const port = process.env.PORT;
const port = 3000;
const password = "aimanzi";

app.get("/", (req, res) => {
    res.send(`Server With The Port ${port} Is Running`)
})

app.get("/hashing", (req, res) => {
    res.send(`Hellow I"m Hashing Your Password`)
    const hash = crypto.createHash("sha256").update(process.env.KEY + password).digest("hex");
    console.log(hash);
})
app.listen(port, () => { console.log(`the server is listen to port :http/localhost:${port}`); });
