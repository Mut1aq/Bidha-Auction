const car = {
	brand: "BMW",
	model: "x",
	year: 2020,
	exteriorColor: "red",
	interiorColor: "black",
	gearType: "auto",
	Fuel: 1000,
	milage: 100000,
	carInspection: "Good",
	notes: "none",
	imgs: [
		"../imgs/landing-page.jpg",
		"../imgs/landing-page.jpg",
		"../imgs/landing-page.jpg",
		"../imgs/landing-page.jpg",
		"../imgs/landing-page.jpg",
	],
};

exports.getOrganizerProfile = (req, res, next) => {
	res.render("profile/organizer-profile", {
		title: "Organizer Profile",
		car,
	});
};
