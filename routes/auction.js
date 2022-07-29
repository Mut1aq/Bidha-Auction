const express = require("express");

const auctionController = require("../controllers/auction");

const router = express.Router();

router.get("/", auctionController.getIndex);

router.get("/bid", auctionController.getAuctionBid);

router.get("/info", auctionController.getAuctionInfo);

router.get("/car-info", auctionController.getCarInfo);

module.exports = router;
