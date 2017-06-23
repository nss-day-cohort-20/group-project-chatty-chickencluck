//global var
var chattyCluck = (function(chattyCluckObj) {
    //recieves array or takes new messages and returns it so we can save it somewhere.
    let msgInput = document.getElementById("msgInput").value;
    let msgBoard = document.getElementById("msgBoard");

    chattyCluckObj.makeMsgArr = function() {
        let msgArr = [];
        msgArr.push(msgInput);

    };

    chattyCluckObj.formatArr = function(array) {
        array.forEach(function(message, index) {
            msgBoard.innerHTML += `<p id="msg[index]">${message.text}<button class="deleteMsg">Delete</button></p>`
        });
    };

    chattyCluckObj.printMsg = function(array) {};

    function clearTxt() {
        msgInput.value = "";
    };
    // when enter is hit it pushes the input value into the html
    chattyCluckObj.makeMsgArr = function() {
        let msgInput = document.getElementById(“msgInput”).value;
        let msgArr = [];
        msgArr.push(msgInput);
        return msgArr
    };



    return chattyCluckObj


}(chattyCluck || {}))

//use find to splice based on value of the array's object's string property
//run values in the same delete function?
