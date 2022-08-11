const Auction = {};
const Cars = {};

exports.getDashboard = (req, res, next) => {
	res.render("admin/dashboard", { title: "Dashboard" });
};
exports.getProfile = (req, res, next) => {
	res.render("profile/admin-profile", { title: "Admin Profile" });
};
exports.getOrganizerRequests = (req, res, next) => {
	res.render("admin/admin-requests", { title: "Organizer Requests" });
};
exports.getSignin = (req, res, next) => {
	res.render("admin/admin-signin", { title: "Sign In" });
};

// exports.postSelectCars =async (req, res, next) => {
// 	const selectedCars = req.body.selectedCars;
// 	await Cars.save(selectedCars)
// 	await Auction
// };

exports.postAddAuction = async (req, res, next) => {
	const auction = new Auction(req.body.auction);
	await auction.save();
	res.redirect("/admin/dashboard");
};
/*
start
finish
cars: {

}
*/
