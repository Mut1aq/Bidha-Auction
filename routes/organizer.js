const express = require("express");
const multer = require("multer");
const upload = multer({ storage });

const organizerController = require("../controllers/organizer");

const router = express.Router();

router.get("/organizer-profile", organizerController.getOrganizerProfile);
// router.get("/user-signin", authController.getSignin);

// router.post("/user-signup", authController.postAddUser);
router.post("/car", upload.array("imgs"), organizerController.postAddCar);

module.exports = router;
