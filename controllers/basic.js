exports.getHome = (req, res, next) => {
	res.render("basic/home", { title: "Bidha Auction" });
};
