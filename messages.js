//global var
var chattyCluck = (function(chattyCluckObj) {
    //recieves array or takes new messages and returns it so we can save it somewhere.
    let msgInput = document.getElementById("msgInput").value;
    let msgBoard = document.getElementById("msgBoard");

    chattyCluckObj.makeMsgArr = function(msgObject) {
        let msgArr = [];
        msgArr.push(msgObject);

    };

    chattyCluckObj.formatArr = function(array) {
        array.forEach(function(message, index) {//index = [i]
            msgBoard.innerHTML += `<p id="msg[index]" class="delete">
                                        ${message.text}<button class="deleteMsg">Delete</button></p>`
        });
    };

    chattyCluckObj.printMsg = function(array) {};

    function clearTxt() {
        msgInput.value = "";
    };
    // when enter is hit it pushes the input value into the html
    
    chattyCluckObj.createMsg = function(){//when enter is pressed
        let msgObj = Object.create(null);
        msgObj.id = function(){//when enter is pressed
            for (var i = 0; i = msgArr.length; i++) {
                return i//This will give it it's own unique id if it doesn't
                // work maybe .mathRandom?
            }
        }
        msgObj.text = msgInput.value
        msgInput.value = "";
    }
    return chattyCluckObj
//so when the delete button is pressed function must be run that looks for 
//string that matches it's own parent's string

}(chattyCluck || {}))

//use find to splice based on value of the array's object's string property
//run values in the same delete function?
