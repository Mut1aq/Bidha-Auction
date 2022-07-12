const express = require("express");

const basicController = require("../controllers/basic");

const router = express.Router();

router.get("/", basicController.getHome);
// router.get("/user-signin", authController.getSignin);

// router.post("/user-signup", authController.postAddUser);

module.exports = router;
