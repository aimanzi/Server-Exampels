const expess = require("express");
const app = expess();
const port = 3001;
const router = require("./router")
app.use(router);
app.listen(port, () => { console.log(`the server is listen to port http://localhost:${port}`); });
