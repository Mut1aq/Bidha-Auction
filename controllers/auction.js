let auctionData = [
	{
		date: new Date("July 11, 2022 03:24:00"),
		cars: [
			{
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
			},
			{
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
