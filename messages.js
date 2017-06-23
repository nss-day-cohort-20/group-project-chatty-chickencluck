//global var
var chattyCluck = (function(chattyCluckObj) {
//recieves array or takes new messages and returns it so we can save it somewhere.


    chattyCluckObj.formatMsg = function(input) {
        return `<p id="msg">${input.value}<button class="deleteMsg">Delete</button></p>`


    };

    chattyCluckObj.clearText = function() {
            msgInput.value = "";
        }
        // when enter is hit it pushes the input value into the html

    chattyCluckObj.formatArr = function(array) {
        array.forEach(function(message, index) {
            msgBoard.innerHTML += `<p id="msg[index]">${message.text}<button class="deleteMsg">Delete</button></p>`
        });
      }

    

    return chattyCluckObj


}(chattyCluck || {}));

//use find to splice based on value of the array's object's string property
//run values in the same delete function?
