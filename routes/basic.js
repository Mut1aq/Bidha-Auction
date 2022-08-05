const express = require("express");

const basicController = require("../controllers/basic");

const router = express.Router();

router.get("/", basicController.getHome);

router.get("/wishlist", basicController.getWishlist);

module.exports = router;
