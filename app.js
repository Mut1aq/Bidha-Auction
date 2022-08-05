const express = require("express");
const path = require("path");

const authRoutes = require("./routes/auth");
const auctionRoutes = require("./routes/auction");
const basicRoutes = require("./routes/basic");
const userRoutes = require("./routes/user");
const organizerRoutes = require("./routes/organizer");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true })); // middleware
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
// 	res.render("basic/home", {title: "Bidha Auction"});
// });
app.use(basicRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(organizerRoutes);
app.use("/auction", auctionRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
	console.log("port 3000");
});

/**
 * ! Add two pics (countdown)
 * ! Countdown responsive
 * ! Media Query for Auction/Bid
 * ! Time Left Bid
 * ! Burger Menu
 * Landing page (Info about webapp, Help section, org or bidder link) Done
 * Auth pages (org) Done
 * Home page (Ads, [clickable]=Count Down(), Search Bar)
 * Car Info
 * Single Auction (cars and info, bid starting 100x, Wishlist)
 * prev (what cars sold, )
 * Profile page (users, Wallet) Middleware Done
 * Edit Profile page Done
 * Profile page (organizer)
 * Edit Profile Page
 * Add Car
 * Pervious Auctions (Info about cars)
 * About Us (Info about the team and tutorial for the web application)
 * Contact Us Done
 * Admin Panel
 */
