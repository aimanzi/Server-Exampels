const express = require("express");
const cors = require("cors")
const router = express.Router();
var bodyParser = require('body-parser'); //to reciving data from frontEnd as JSON file
router.use(bodyParser.json());
const encr = require("../handlers/encr") // import for handlers functions

router.get("", cors(), encr.mainPage);
router.post("/data", cors(), encr.encrFunction)

module.exports = router;                              // export the router 