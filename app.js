const express = require("express");
const path = require("path");

const authRoutes = require("./routes/auth");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true })); // middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(authRoutes);

app.listen(3000, () => {
	console.log("port 3000");
});

/**
 * Landing page
 * Auth pages
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
