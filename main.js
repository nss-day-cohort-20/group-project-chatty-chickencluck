// creates input space for user
let msgInput = document.getElementById("msgInput");

// creates clear button for message box
let clearBtn = document.getElementById("clearBtn");

// dark theme checkbox
let checkboxOne = document.getElementsByClassName("checkboxOne");

// large text checkbox
let checkboxTwo = document.getElementsByClassName("checkboxTwo");

// creates acces to message board
let msgBoard = document.getElementById("msgBoard");

// creates an object for dark theme
let firstOption = document.getElementById("checkboxOne");

// creates an object for large text 
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