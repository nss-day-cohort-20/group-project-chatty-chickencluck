function setMessages() {
  categories = JSON.parse(event.target.responseText).messages;
  buildDOMObj();
}

function getMessages() {
  let reqMessages = new XMLHttpRequest();
  reqMessages.addEventListener("load", setMessages)
  reqMessages.open("GET", "messages.json");
  reqMessages.send();
}