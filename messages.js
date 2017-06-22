//global var
var chattyCluck = (function(chattyCluckObj){
  
  // msgInput.value
  let emptyMsg = [];
        
  chattyCluckObj.makeArr = function() {
    emptyMsg.push(`<p id="msg-${emptyMsg.length}">${msgInput.value}<button class="deleteMsg">Delete</button></p>`)
  };

  chattyCluckObj.clearText =function() {
    msgInput.value = "";
  }
// when enter is hit it pushes the input value into the html
  msgInput.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        chattyCluckObj.makeArr()
        chattyCluckObj.clearText()
      msgBoard.innerHTML = emptyMsg.join("");
      }
  });

  return chattyCluckObj

}(chattyCluck || {}));

