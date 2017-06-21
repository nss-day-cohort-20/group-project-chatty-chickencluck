var chattyCluck = (function(){


// msgInput.value
let emptyMsg = [];
	    	
	function makeArr() {
		emptyMsg.push(`<p>${msgInput.value}<button>Delete</button></p>`)
	    console.log(makeMsgObj)
	};

	let makeMsgObj = Object.create(null)
	    
	    makeMsgObj.userMessage = emptyMsg;
	    // makeMsgObj.arrIndex = emptyMsg.indexOf(msgInput.value);



	function clearText() {
		msgInput.value = "";
	};

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



function setMessages() {
  //messages = JSON.parse(event.target.responseText).messages;
}

function getMessages() {
  let reqMessages = new XMLHttpRequest();
  reqMessages.addEventListener("load", setMessages);
  reqMessages.open("GET", "messages.json");
  reqMessages.send();
}