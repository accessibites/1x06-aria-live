$(function () {
	function botMsg() {
		$("#msgList").append("<li>Chatbot dice: Un mensajito por aquí.</li>");
		setTimeout(botMsg, Math.floor(Math.random() * 10000));
	}
	setTimeout(botMsg, Math.floor(Math.random() * 10000));


	$("#btnSend").on("click", function (e) {
		var txtField = $("#txtText");
		var text = txtField.val();
		if (text == null || text == "") {
			alert("Debes introducir texto.");
			return;
		}
		$("#msgList").append("<li>Dices: " + text + "</li>");
		txtField.val("");
		txtField.focus();
	});
	$("#txtText").on("keydown", function (e) {
		if (e.keyCode == 13) {
			$("#btnSend").click();
		}
	});
});