//global var
var chattyCluck = (function(chattyCluckObj) {
  // msgInput.value
  let messageCluck = [];
        
  function makeArr() {
    messageCluck.push(`<p id="msg-${messageCluck.length}">${messages}, ${msgInput.value}<button class="deleteMsg">Delete</button></p>`);
  };

  function clearText() {
    msgInput.value = "";
  };







// when enter is hit it pushes the input value into the html
    msgInput.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        makeArr()
        clearText()
        msgBoard.innerHTML = messageCluck.join("");
      }
  });
  return chattyCluckObj
}(chattyCluck || {}));

