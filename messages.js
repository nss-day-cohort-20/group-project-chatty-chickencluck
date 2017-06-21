
var chattyCluck = (function(){
	
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
