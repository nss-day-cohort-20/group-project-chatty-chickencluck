var chattyCluck = (function(chattyCluckObj) {

    chattyCluckObj.formatMsg = function(input) {
        return `<p id="msg">${input.value}<button class="deleteMsg">Delete</button></p>`
    };

    chattyCluckObj.clearText = function() {
            msgInput.value = "";
    }

    chattyCluckObj.formatArr = function(array) {
        array.forEach(function(message, index) {
            msgBoard.innerHTML += `<p id="msg">${message.text}<button class="deleteMsg">Delete</button></p>`
        });
    }

    return chattyCluckObj

}(chattyCluck || {}));