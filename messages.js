var chattyCluck = (function(){

// msgInput.value
let emptyMsg = [];
	    	
	function makeArr() {
		emptyMsg.push(`<p>${msgInput.value}</p>`)
	};

	function clearText() {
		msgInput.value = "";
	}

// when enter is hit it pushes the input value into the html
	msgInput.addEventListener("keyup", function(event) {
	    event.preventDefault();
	    if (event.keyCode == 13) {
	    	makeArr()
	    	clearText()
	 		msgBoard.innerHTML = emptyMsg.join("");
	    }
	});

}(chattyCluck || {}));
			







// notes, non functioning pieces
			// textArea.innerHTML = *msgInput.value*
	    	// function createMessage (message) {msgBoard.innerHTML = message;}; 
	    	// let newMessage = "";
	    	
	    	// for (var i = 0; i <msgInput.value; i++) {
		    // 	let message = `<div>${msgInput.value}</div>`;
		    // 	newMessage += message;
	    	// };
	    	// createMessage(newMessage);