const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/dashboard", adminController.getDashboard);

router.get("/profile", adminController.getProfile);

router.get("/organizer-requests", adminController.getOrganizerRequests);

module.exports = router;
