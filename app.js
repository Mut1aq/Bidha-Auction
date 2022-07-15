const express = require("express");
const path = require("path");

const authRoutes = require("./routes/auth");
const auctionRoutes = require("./routes/auction");
const basicRoutes = require("./routes/basic");
const userRoutes = require("./routes/user");

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
app.use("/auction", auctionRoutes);

app.listen(3000, () => {
	console.log("port 3000");
});

/**
 * Landing page (Info about webapp, Help section, org or bidder link)
 * Auth pages (org)
 * Home page (Ads, [clickable]=Count Down(), Search Bar)
 * Car Info
 * Single Auction
 * Profile page (users, Wallet) Middleware
 * Edit Profile page
 * Profile page (organizer)
 * Edit Profile Page
 * Add Car
 * Pervious Auctions (Info about cars)
 * About Us (Info about the team and tutorial for the web application)
 * Contact Us
 * Admin Panel
 */
