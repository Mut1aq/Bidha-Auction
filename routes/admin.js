const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/", adminController.getSignin);

router.get("/dashboard", adminController.getDashboard);

router.get("/profile", adminController.getProfile);

router.get("/organizer-requests", adminController.getOrganizerRequests);

// router.post("/select-cars", adminController.postSelectCars);

router.post("/auction", adminController.postAddAuction);

module.exports = router;
