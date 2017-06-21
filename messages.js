//global var
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


// //
let messages = (null);
// let msgBoard = document.getElementById('msgBoard');

// //populate dom w/ messages
// function premadeMessages(msgArray)



// function displayMessages() {
// 	let msgArray = messages.map(function(messages) {
// 		let msgObj = {
// 			name = messages.name
// 			message = messages.message
// 		}
// 		return msgObj
// 	});
// }
// console.log("message array", msgArray);

//TODO look into forEach create element append child

// document.body.onload = addMessages;

// function addMessages () { 
//   // create a new div element 
//   // and give it some content 
//   var newMessages = document.createElement("messages"); 
//   newMessages.appendChild(messages); 
//   //add the text node to the newly created div. 

//   //add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("msgBoard"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }

getMessages();

var newMessages = document.getElementById("msgBoard")[0];
  let premadeMessages = json.messages;
  for(var i = 0; i < messages.length; i++) {
    var msgBoard = document.getElementById("msgBoard");
    msgBoard.innerHTML = messages[i].name;
    newMessages.appendChild(msgBoard);
    var msgText = document.createElement("p");
    text.innerHTML = messages[i].message;
    newMessages.appendChild(p);
  }



function setMessages() {
  let messages = JSON.parse(event.target.responseText).messages;
  console.log("messages", messages);
}



function getMessages() {
  let reqMessages = new XMLHttpRequest();
  reqMessages.addEventListener("load", setMessages);
  reqMessages.open("GET", "messages.json");
  reqMessages.send();
<<<<<<< HEAD
}

=======
}
>>>>>>> master
