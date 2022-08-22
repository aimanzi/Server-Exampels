const express = require("express");
const cors = require("cors")
const router = express.Router();
// const info = require("./handlers/info") // import for handlers functions
// router.get("/employeeinfo", cors(), info.employeeInfo);
// router.get("/personalinfo", cors(), info.personalInfo);

router.post("/post", cors(), (req, res) => {
    //send data to app1
    var method = req.method.toUpperCase();
    var proxy_url = 'http/localhost:3001';
    var options = {
        headers: { "Connection": "close" },
        url: proxy_url,
        method: method,
        json: true,
        body: req.body
    };
    function callback(error, response) {
        if (!error && response.statusCode == 200) {
            console.log(); ("the data has sent to server 1");
        }
    }
    request(options, callback);
})

router.post("/post", cors(), (req, res) => {
    //send data to app2   
    var method = req.method.toUpperCase();
    var proxy_url = 'http/localhost:3005';
    var options = {
        headers: { "Connection": "close" },
        url: proxy_url,
        method: method,
        json: true,
        body: req.body
    };
    function callback(error, response) {

        if (!error && response.statusCode == 200) {
            console.log("the data has sent to server 2");
        }
    }
    request(options, callback);
});

module.exports = router; 