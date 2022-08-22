const expess = require("express");
const crypto = require("crypto");
const { log } = require("console");
const app = expess();
const port = 3001;
// const port = process.env.PORT1;
const password = "aimanzi";
const key = password.split("");
const key1 = key.includes("a", "b", "c")

app.get("/", (req, res) => {
    res.send(`Server With The Port ${port} Is Running`)
})

app.get("/hashing", (req, res) => {
    res.send(`Hellow I"m Hashing Your Password`)
    const hash1 = crypto.createHash("sha256").update(key1 + password).digest("hex");
    console.log(hash1);
})

app.listen(port, () => { console.log(`the server is listen to port :http/localhost:${port}`); });
