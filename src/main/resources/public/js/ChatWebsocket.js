//Establish the WebSocket connection and set up event handlers
var webSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/frontChat");
webSocket.onmessage = function (msg) { updateChat(msg) };
webSocket.onclose = function () { alert("WebSocket connection closed") };

//Send message if "Send" is clicked
id("send").addEventListener("click", function () {
    sendMessage(id("message").value);
});

//Send message if enter is pressed in the input field
id("message").addEventListener("keypress", function (e) {
    if (e.keyCode === 13) { sendMessage(e.target.value); }
});

//Send a message if it's not empty, then clear the input field
function sendMessage(message) {
    if (message !== "") {
        webSocket.send(message);
        id("message").value = "";
    }
}

//update chatbox on messagecall
function updateChat(msg) {
    var resultJSON = msg.data;
    var result = $.parseJSON(resultJSON);
    id("userlist").innerHTML = "";
    $.each(result, function(k, v) {
        //display the user with the message
        insert("Chatbox", "<tr><td>" + k + ":</td><td>" + v + "</td></tr>");
    });

    //Helper function
    function insert(targetId, message) {
        id(targetId).insertAdjacentHTML("afterbegin", message);
    }

    //Helper function
    function id(id) {
        return document.getElementById(id);
    }
}