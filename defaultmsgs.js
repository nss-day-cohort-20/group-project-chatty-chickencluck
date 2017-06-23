var chattyCluck = function(loadJson){
  let messages = null;

 // loadJson.outputMessages = function(premadeMessages) {
 //    console.log("premadeMessages", premadeMessages);
 //    for(var i = 0; i < premadeMessages.length; i++) {
 //      let newMessages = document.getElementById("msgBoard");
 //      let msgBoard = document.createElement("article");
 //      let msgText = document.createElement("p");
 //      msgText.innerHTML = premadeMessages[i].text;
 //      msgBoard.innerHTML = premadeMessages[i].name;
 //      newMessages.appendChild(msgBoard);
 //      newMessages.appendChild(msgText);
 //    }
 //  }

   


  loadJson.setMessages = function(callback) {
    messages = JSON.parse(event.target.responseText).messages;
    console.log("messages", messages);
    callback(messages)
  }


  loadJson.loadMessages = function(callback) {
    let reqMessages = new XMLHttpRequest();
    reqMessages.addEventListener("load", function(){loadJson.setMessages(callback)});
    reqMessages.open("GET", "messages.json");
    reqMessages.send();
  }


  loadJson.getMessages = function() {
    loadJson.loadMessages()
    return messages
  }


  // loadJson.getMessages();
  // loadJson.loadMessages();

  

  return loadJson

}(chattyCluck || {});

//TODO look into forEach, create element, append child