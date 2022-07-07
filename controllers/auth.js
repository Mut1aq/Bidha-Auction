exports.getSignup = (req, res, next) => {
	res.render("auth/user-signup", { title: "Sign Up" });
};

exports.getSignin = (req, res, next) => {
	res.render("auth/user-signin", { title: "Sign In" });
};
// JSON => JavaScript Object Notation
exports.postAddUser = (req, res, next) => {
	const user = req.body.user;

	console.log(user);
	res.redirect("/");
};
