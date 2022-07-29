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

let auctionData = [
	{
		date: new Date("July 11, 2022 03:24:00"),
		cars: [
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
				imgs: [
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
				],
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
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
					"../imgs/landing-page.jpg",
				],
			},
		],
	},
];
const user = {
	name: "Ahmed",
	wallet: 100,
};

exports.getIndex = (req, res, next) => {
	let today = new Date().toLocaleString("en-US", { timeZone: "UTC" });
	let auctionDate = auctionData[0].date.toLocaleString("en-US", {
		timeZone: "UTC",
	});

	let countDown =
		parseInt(
			auctionDate.substring(
				auctionDate.indexOf("/") + 1,
				auctionDate.lastIndexOf("/")
			)
		) -
		parseInt(
			today.substring(today.indexOf("/") + 1, today.lastIndexOf("/"))
		);

	const enterAuction = countDown === 0 && user.wallet > 200 ? true : false;
	res.render("auction/index", {
		auctionData,
		title: "Auction Page",
		countDown,
		enterAuction,
	});
};

exports.getAuctionInfo = (req, res, next) => {
	res.render("auction/info", { auctionData, title: "Auction Info" });
};

exports.getCarInfo = (req, res, next) => {
	res.render("auction/car", { title: "Car Info", car });
};
exports.getAuctionBid = (req, res, next) => {
	res.render("auction/bid", { title: "Auction Bid", auction });
};
let auction = {
	date: new Date("July 11, 2022 03:24:00"),
	cars: [
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
	],
};
