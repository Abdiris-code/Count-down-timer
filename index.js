// Set the date we're counting down to
const countDownDate = new Date("may 5, 2022 15:37:25").getTime();

productCountDownDate = () => {
	// Get today's date and time
	const now = new Date().getTime();
	// Find the distance between now and the count down date
	 distance = countDownDate - now;
	 
	// Time calculations for days, hours, minutes and seconds
	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;

	const d = Math.floor(distance / (days));
	const h = Math.floor((distance % (days)) / (hours));
	const m = Math.floor((distance % (hours)) / (minutes));
	const s = Math.floor((distance % (minutes)) / (seconds));

	document.getElementById("days").innerText = d
	document.getElementById("hours").innerText = h
	document.getElementById("minutes").innerText = m
	document.getElementById("seconds").innerText = s
};

setInterval(() => {
	productCountDownDate();

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(productCountDownDate);

		document.getElementById("days").innerText = "Expired";
		document.getElementById("hours").innerText = "Expired";
		document.getElementById("minutes").innerText = "Expired";
		document.getElementById("seconds").innerText = "Expired";
	}
}, 1000);
