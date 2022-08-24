const express = require("express");
const cors = require("cors")
const router = express.Router();
const info = require("../handlers/info") // import for handlers functions
router.get("", cors(), info.mainPage);
router.get("/employeeinfo", cors(), info.employeeInfo);
router.get("/personalinfo", cors(), info.personalInfo);


module.exports = router;                              // export the router 