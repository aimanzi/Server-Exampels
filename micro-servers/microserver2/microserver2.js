const expess = require("express");
const app2 = expess();
const port = 3005;
app2.listen(port, () => { console.log(`the server is listen to port :http/localhost:${port}`); });
app2.get('/', function(req, res) {
    res.send('Hello Server 2')
  });