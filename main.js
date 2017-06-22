let msgInput = document.getElementById("msgInput");
let clearBtn = document.getElementById("clearBtn");
let checkboxOne = document.getElementsByClassName("checkboxOne");
let checkboxTwo = document.getElementsByClassName("checkboxTwo");
let msgBoard = document.getElementById("msgBoard");

let firstOption = document.getElementById("checkboxOne");
let secondOption = document.getElementById("checkboxTwo");

firstOption.addEventListener("click", function () {
	document.body.classList.toggle("darkTheme");
	console.log("You just changed the color!")
	});
	
secondOption.addEventListener("click", function () {
	document.body.classList.toggle("largeText");
	console.log("You just changed the size!")
	});

// think of a way to use the '.find' to incorporate finding properties of an object to delete