const expess = require("express");
const app1 = expess();
const port = 3001;
app1.listen(port, () => { console.log(`the server is listen to port :http/localhost:${port}`); });
app1.get('/', function(req, res) {
    res.send("Hello Server 1")
  });