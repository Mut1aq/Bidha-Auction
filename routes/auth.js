const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/user-signup", authController.getSignup);

router.get("/user-signin", authController.getSignin);

router.post("/user-signup", authController.postAddUser);

module.exports = router;
