var chattyCluck = function(loadJson){
  let messages = null;
  let newMessages = document.getElementById("msgBoard");

  loadJson.setMessages = function(callback) {
    console.log("callback", callback);
    messages = JSON.parse(event.target.responseText).messages;
    console.log("messages", messages);
    callback(messages)


  }

  loadJson.loadMessages = function(callback) {
    console.log("loadMessages");
    let reqMessages = new XMLHttpRequest();
    reqMessages.addEventListener("load", function(){loadJson.setMessages(callback)});
    reqMessages.open("GET", "messages.json");
    reqMessages.send();
  }

  loadJson.getMessages = function() {

    //TODO make getter
    return messages
  }
  


  
// let msgBoard = document.createElement("article");
      // let msgText = document.createElement("p");
      // msgText.innerHTML = premadeMessages[i].text;
      // msgBoard.innerHTML = premadeMessages[i].name;
      // newMessages.appendChild(msgBoard);
      // newMessages.appendChild(msgText);

  // loadJson.getMessages();
  // loadJson.loadMessages();

  
  return loadJson

}(chattyCluck || {});

//TODO look into forEach, create element, append child
//TODO needs to return the array of messages