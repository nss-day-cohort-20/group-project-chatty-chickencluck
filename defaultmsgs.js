var chattyCluck = function(loadJson){
  let messages = null;

<<<<<<< HEAD
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
=======
>>>>>>> master

  

 



<<<<<<< HEAD
  function setMessages() {
=======
  loadJson.setMessages = function(callback) {
>>>>>>> master
    messages = JSON.parse(event.target.responseText).messages;
    console.log("messages", messages);
    callback(messages)


  }



<<<<<<< HEAD
  function loadMessages() {
=======
  loadJson.loadMessages = function(callback) {
>>>>>>> master
    let reqMessages = new XMLHttpRequest();
    reqMessages.addEventListener("load", function(){loadJson.setMessages(callback)});

    reqMessages.open("GET", "messages.json");
    reqMessages.send();
  }

  loadJson.getMessages = function() {

    loadJson.loadMessages()
    return messages
  }
<<<<<<< HEAD
  loadJson.loadMessages();

=======
  // loadJson.getMessages();
  // loadJson.loadMessages();

  
>>>>>>> master
  return loadJson

}(chattyCluck || {});

//TODO look into forEach, create element, append child