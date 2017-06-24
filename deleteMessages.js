var chattyCluck = (function(chattyCluckObj){

document.querySelector("body").addEventListener("click", function(event) {
			let pId = document.getElementById("msg")
		if (event.target.className === "deleteMsg") {
			pId.parentNode.removeChild(pId)
		}
	})

	return chattyCluckObj

}(chattyCluck || {}));


