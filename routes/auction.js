const express = require("express");

const auctionController = require("../controllers/auction");

const router = express.Router();

router.get("/", auctionController.getIndex);

router.get("/info", auctionController.getAuctionInfo);

module.exports = router;
