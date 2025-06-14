const express = require("express");
const router = express.Router();

const { addComment } = require("../controllers/commentControllers");

router.post("/", addComment);

module.exports = router;
