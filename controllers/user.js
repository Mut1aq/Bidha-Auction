const cars = [
	{
		organizerName: "Yazan",
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
		imgs: ["../imgs/car.jpg", "../imgs/car2.jpg", "../imgs/car3.png"],
	},
	{
		organizerName: "Ahmed",
		brand: "Honda",
		model: "Insight",
		year: 2020,
		exteriorColor: "red",
		interiorColor: "black",
		gearType: "auto",
		Fuel: 1000,
		milage: 100000,
		carInspection: "Good",
		notes: "none",
		imgs: [
			"../imgs/car2.jpg",
			"../imgs/car2.jpg",
			"../imgs/car2.jpg",
			"../imgs/car2.jpg",
		],
	},
];

exports.getUserProfile = (req, res, next) => {
	res.render("profile/user-profile", { title: "User Profile", cars });
};
