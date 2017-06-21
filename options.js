console.log("Welcome to the Jungle!")

// // var chattyCluck = (function(){
	
// // }(chattyCluck || {}));

let firstOptionOutput = document.getElementsByClassName("checkboxOne");
let secondOptionOutput = document.getElementsByClassName("checkboxTwo");
console.log(secondOptionOutput);

function handleSectionClick() {
	console.log(event)
	let elementText = event.target.innerHTML
	firstOptionOutput.innerHTML =  `<p class="msg">You clicked on the ${elementText} section</p>`;
};

secondOptionOutput[0].addEventListener("click", handleSectionClick);

function sayYourName(name) {
	console.log("My name is " + name );
};

let piggie = document.getElementsByClassName("checkboxOne", "checkboxTwo");


document.getElementById("checkboxOne").addEventListener("click", function() {
	piggie.classList.toggle("neonDream");
	console.log(piggie, piggie.classList);
});

document.getElementById("checkboxTwo").addEventListener("click", function() {
	piggie.classList.toggle("hulkify");
	console.log(piggie, piggie.classList)
});

// ***********************************
// Where you click (the event) vs where the listener is attached

document.getElementById("pig-wrapper").addEventListener("click", function() {
	console.log("WHAT I clicked on", event.target);
	console.log("WHERE the listener is attached", event.currentTarget);
});

