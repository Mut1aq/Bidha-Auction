const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get("/user-profile", userController.getUserProfile);
// router.get("/user-signin", authController.getSignin);

// router.post("/user-signup", authController.postAddUser);

module.exports = router;
