console.log("Welcome to the Jungle!")

var chattyCluck = (function(){
	let firstOption = document.getElementById("checkboxOne");
	let secondOption = document.getElementById("checkboxTwo", "clearBtn");

	firstOption.addEventListener("click", function () {
		document.body.classList.toggle("darkTheme");
		// console.log(firstOption, firstOption.classList)
		console.log("You just changed the color!")
	});
	secondOption.addEventListener("click", function () {
		document.body.classList.toggle("largeText");
		// console.log(secondOption, secondOption.classList);
		console.log("You just changed the size!")
	});
}(chattyCluck || {}));



