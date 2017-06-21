console.log("Welcome to the Jungle!")

var chattyCluck = (function(){
	let firstOption = document.getElementById("checkboxOne");
	let secondOption = document.getElementById("checkboxTwo");

	firstOption.addEventListener("click", darkTheme);
	secondOption.addEventListener("click", largeText);

	function darkTheme () {
		firstOption.classList.toggle("darkTheme");
		console.log(firstOption, firstOption.classList)
	};
	function largeText () {
		secondOption.classList.toggle("largeText");
		console.log(secondOption, secondOption.classList);
	}	
}(chattyCluck || {}));




// let piggie = document.getElementById("guinea-pig");


// document.getElementById("add-color").addEventListener("click", function() {
// 	piggie.classList.toggle("blue");
// 	console.log(piggie, piggie.classList)
// });


// document.getElementById("make-large").addEventListener("click", function() {
// 	piggie.classList.toggle("hulk");
// 	console.log(piggie, piggie.classList)
// });


// document.getElementById("add-border").addEventListener("click", function() {
// 	piggie.classList.toggle("borderPatrol");
// 	console.log(piggie, piggie.classList)
// });


// document.getElementById("add-rounding").addEventListener("click", function() {
// 	piggie.classList.toggle("rounding");
// 	console.log(piggie, piggie.classList)
// });




