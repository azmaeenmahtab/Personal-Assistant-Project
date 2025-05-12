const express = require("express");
const router = express.Router();
const apiController = require("../controllers/controller");



//routes
router.post("/register", apiController.register);

router.post("/login", apiController.login);






























module.exports = router;