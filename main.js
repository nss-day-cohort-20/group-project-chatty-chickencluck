var chattyCluck;

// creates input space for user
let msgInput = document.getElementById("msgInput");

// creates clear button for message box
let clearBtn = document.getElementById("clearBtn");

// dark theme checkbox
let checkboxOne = document.getElementsByClassName("checkboxOne");

// large text checkbox
let checkboxTwo = document.getElementsByClassName("checkboxTwo");

// creates acces to message board


// creates an object for dark theme
let firstOption = document.getElementById("checkboxOne");

// creates an object for large text 
let secondOption = document.getElementById("checkboxTwo");

// event listener for dark theme
firstOption.addEventListener("click", function () {
	document.body.classList.toggle("darkTheme");
	});
	
// event listener for large text
secondOption.addEventListener("click", function () {
	document.body.classList.toggle("largeText");
	});
// think of a way to use the '.find' to incorporate finding properties of an object to delete
chattyCluck.loadMessages(chattyCluck.formatArr);

//pass in format function for arrays


// msgInput.addEventListener("keyup", function(event) {
//         event.preventDefault();

//         if (event.keyCode == 13) {
            
//             let formattedMsg = chattyCluckObj.formatArr(chattyCluck.makeMsgArr)
//             chattyCluckObj.clearText()
//             msgBoard.innerHTML += formattedMsg;
//         }

// })

msgInput.addEventListener("keyup", function(event) {
        event.preventDefault();

        if (event.keyCode == 13) {
            
            let formattedMsg = chattyCluck.formatArr(chattyCluck.makeMsgArr(chattyCluck.createMsg));
            msgBoard.innerHTML += formattedMsg;
        }

})
