const expess = require("express");
const app = expess();
const crypto = require("crypto"); 
const dotenv = require("dotenv"); 
dotenv.config("/.env");
const port = process.env.PORT;
const router = require("./router")
app.use(router);
app.listen(port, () => { console.log(`the server is listen to port http://localhost:${port}`); });