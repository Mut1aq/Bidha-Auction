const h2 = document.getElementById("bid-amount");

const addAmountButton = document.getElementById("add-button");
const declineAmountButton = document.getElementById("decline-button");

addAmountButton.addEventListener("click", () => {
	h2.textContent = parseInt(h2.textContent) + 100;
});
declineAmountButton.addEventListener("click", () => {
	if (parseInt(h2.textContent) - 100 <= 100) {
		h2.textContent = 100;
	} else {
		h2.textContent = parseInt(h2.textContent) - 100;
	}
});
