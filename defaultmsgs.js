var chattyCluck = function(loadJson){
  let messages = null;

  

 



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