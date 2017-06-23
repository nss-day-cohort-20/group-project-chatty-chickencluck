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
    msgInput.addEventListener("keyup", function(event) {
        event.preventDefault();

        if (event.keyCode == 13) {
            let msgInput = document.getElementById("msgInput");
            let formattedMsg = chattyCluckObj.formatMsg(msgInput)
            chattyCluckObj.clearText()
            msgBoard.innerHTML += formattedMsg;
            // emptyMsg.findIndex(values)

            // function values(element) {
            //     console.log("value", element);
            //     console.log(emptyMsg); //doesn't work dynamically?

            //     // if(index.length > -1 && emptyMsg.indexOf(element[i]) === this[i] 
            //     // the index itself?
            //     // not sure what goes here){
            //     // 
            //     //    emptyMsg.slice (index, 1);
            //     // }
            // }
            // // emptyMsg.forEach(findIndex(values()))
        }
    });

    return chattyCluckObj


}(chattyCluck || {}));

//use find to splice based on value of the array's object's string property
//run values in the same delete function?
