
let clearBtn = document.getElementById("clearBtn");
let checkboxOne = document.getElementsByClassName("checkboxOne");
let checkboxTwo = document.getElementsByClassName("checkboxTwo");
let msgBoard = document.getElementById("msgBoard");


// think of a way to use the '.find' to incorporate finding properties of an object to delete
 function outputMessages(premadeMessages) {
    console.log("premadeMessages", premadeMessages);
    let newMessages = document.getElementById("msgBoard");
    for(var i = 0; i < premadeMessages.length; i++) {
      let msgBoard = document.createElement("article");
      let msgText = document.createElement("p");
      msgText.innerHTML = premadeMessages[i].text;
      msgBoard.innerHTML = premadeMessages[i].name;
      newMessages.appendChild(msgBoard);
      newMessages.appendChild(msgText);
    }
  }
  chattyCluck.loadMessages(chattyCluck.outputMessages)