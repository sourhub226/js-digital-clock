window.onload = function () {
	if (window.innerWidth < 790) {
		document.querySelector(".clock-container").style.transform = `scale(${window.outerWidth/790-0.1})`;
	}
};

setInterval(function () {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	hours = hours.toString();
	minutes = minutes < 10 ? '0' + minutes : minutes;
	minutes = minutes.toString();

	var hrsDigit1 = document.querySelector(".hours .digit-1 p");
	var hrsDigit2 = document.querySelector(".hours .digit-2 p");
	var minDigit1 = document.querySelector(".minutes .digit-1 p");
	var minDigit2 = document.querySelector(".minutes .digit-2 p");

	if (hours.length < 2) {
		hrsDigit1.style.color = "transparent";
		hrsDigit2.innerHTML = hours[0];
	} else {
		hrsDigit1.innerHTML = hours[0];
		hrsDigit2.innerHTML = hours[1];
	}
	minDigit1.innerHTML = minutes[0];
	minDigit2.innerHTML = minutes[1];

	if (ampm == "am") {
		document.querySelector(".am").style.backgroundColor = "#f33";
	} else {
		document.querySelector(".pm").style.backgroundColor = "#f33";
	}

	var digit = document.querySelectorAll("p");
	digit.forEach(function (d) {
		if (d.innerHTML == "1") {
			d.style.transform = "translateX(10px)";
		} else {
			d.style.transform = "translateX(0px)";
		}
	});
}, 1000);
