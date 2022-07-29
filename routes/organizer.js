const express = require("express");

const organizerController = require("../controllers/organizer");

const router = express.Router();

router.get("/organizer-profile", organizerController.getOrganizerProfile);
// router.get("/user-signin", authController.getSignin);

// router.post("/user-signup", authController.postAddUser);

module.exports = router;
