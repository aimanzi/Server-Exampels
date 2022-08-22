const expess = require("express");
const app = expess();
const port = 5000;
const router = require("../router-to-microservers/routerTomicroServer")
app.use(router);
app.listen(port, () => { console.log(`the server is listen to port :http/localhost:${port}`); });
app.get('/', function (req, res) {
  res.send('Hello Main Server')
});