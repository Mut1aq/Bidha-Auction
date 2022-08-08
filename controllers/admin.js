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
