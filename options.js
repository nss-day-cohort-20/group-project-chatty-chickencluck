var chattyCluck = (function(){
	
}(chattyCluck || {}));


console.log("Ahoy, Captain!");

let outputDiv = document.getElementById("output");

let articleEl = document.getElementsByClassName("article-section");
// console.log("articleEl");


function handleSectionClick() {
	console.log(event)
	let elementText = event.target.innerHTML
	outputDiv.innerHTML = `<p class="msg">You clicked on the ${elementText} section</p>`;
};


// handleSectionClick();

articleEl[0].addEventListener("click", handleSectionClick);


function sayYourName(name) {
	console.log("My name is " + name );
}


let piggie = document.getElementById("guinea-pig");


document.getElementById("add-color").addEventListener("click", function() {
	piggie.classList.toggle("blue");
	console.log(piggie, piggie.classList)
});


document.getElementById("make-large").addEventListener("click", function() {
	piggie.classList.toggle("hulk");
	console.log(piggie, piggie.classList)
});


document.getElementById("add-border").addEventListener("click", function() {
	piggie.classList.toggle("borderPatrol");
	console.log(piggie, piggie.classList)
});


document.getElementById("add-rounding").addEventListener("click", function() {
	piggie.classList.toggle("rounding");
	console.log(piggie, piggie.classList)
});



// ***********************************
// Where you click (the event) vs where the listener is attached


document.getElementById("pig-wrapper").addEventListener("click", function() {
	console.log("WHAT I clicked on", event.target);
	console.log("WHERE the listener is attached", event.currentTarget);
});







console.log("Still going!"); 









