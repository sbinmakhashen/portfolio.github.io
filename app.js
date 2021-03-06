window.onscroll = () => {
	const navbar = document.querySelector(".nav");
	const ul = document.getElementsByTagName("ul")[0];
	const pixTop = window.scrollY;
	if (pixTop >= 50) {
		navbar.classList.add("bg-onscroll");
		ul.className = "ul-bg";
	} else {
		navbar.classList.remove("bg-onscroll");
		// ul.className = 'ul-bg'.remove;
		ul.classList.remove("ul-bg");
	}
};

// Typewriting effect
const texts = [
	"Front-End Developer",
	"Web Developer",
	"Blogger",
	"UI Developer",
];
// count el in array
let count = 0;
// count chars
let index = 0;
let currentText = "";
let letter = "";
function typing() {
	// validate
	if (count === texts.length) {
		// it resets after done counting the els in array
		count = 0;
	}
	// setting current text
	currentText = texts[count];
	// go through the el letter by letter
	letter = currentText.slice(0, index++);
	// getting the h4 tag to insert the texts inside of it
	document.querySelector(".type").textContent = letter;
	// validate
	if (letter.length === currentText.length) {
		// reset index to start counting each el from 0 index
		index = 0;
		// increment count by one
		count++;
	}
	// type texts every 2 sec
	setTimeout(typing, 200);
}
typing();
// highlighting nav links on scroll

addEventListener("scroll", () => {
	// init nav links
	let navLinks = document.querySelectorAll("nav ul li a");
	let topPage = scrollY;
	// looping through the nav links
	navLinks.forEach((links) => {
		// getting the sections by their has/#
		let sections = document.querySelector(links.hash);
		// console.log(sections);
		if (
			sections.offsetTop <= topPage &&
			sections.offsetTop + sections.offsetHeight > topPage
		) {
			links.classList.add("active");
		} else {
			links.classList.remove("active");
		}
	});
});

// regular expressions for form
function regExpression() {
	// regular expression for phone input field
	document.getElementById("phone").addEventListener("blur", () => {
		const phone = document.getElementById("phone");
		// regular expression
		const regPhone = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
		// validation
		if (!regPhone.test(phone.value)) {
			document.querySelector(".phone-invalid").style.display = "block";
		} else {
			document.querySelector(".phone-invalid").style.display = "none";
		}
	});

	// regular expression for email input field
	document.getElementById("email").addEventListener("blur", () => {
		const email = document.getElementById("email");
		// regular expression
		const regemail = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/i;
		// validation
		if (!regemail.test(email.value)) {
			document.querySelector(".email-invalid").style.display = "block";
		} else {
			document.querySelector(".email-invalid").style.display = "none";
		}
	});
}
regExpression();
