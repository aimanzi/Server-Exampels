const express = require('express')
cors=require("cors")
const app = express()
const port = 3000;

app.get("",cors(),(req,res)=>
{
res.send("Wellcom For Express Server Home Page")
})
app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))