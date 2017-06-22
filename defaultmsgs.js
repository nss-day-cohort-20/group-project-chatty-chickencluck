let messages = null;

let newMessages = document.getElementById("msgBoard");

function outputMessages(premadeMessages) {
  console.log("premadeMessages", premadeMessages);
  for(var i = 0; i < premadeMessages.length; i++) {
    let msgBoard = document.createElement("article");
    let msgText = document.createElement("p");
    msgText.innerHTML = premadeMessages[i].text;
    msgBoard.innerHTML = premadeMessages[i].name;
    newMessages.appendChild(msgBoard);
    newMessages.appendChild(msgText);
  }
}




function setMessages() {
  messages = JSON.parse(event.target.responseText).messages;
  console.log("messages", messages);
  outputMessages(messages)
}



function getMessages() {
  let reqMessages = new XMLHttpRequest();
  reqMessages.addEventListener("load", setMessages);
  reqMessages.open("GET", "messages.json");
  reqMessages.send();
}
getMessages();

//TODO look into forEach, create element, append child