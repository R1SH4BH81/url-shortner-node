const express = require("express");
const {handleGenerateNewShortUrl} = require("../controllers/url.controllers")
const router = express.Router();


router.post("/",handleGenerateNewShortUrl);
module.exports = router;