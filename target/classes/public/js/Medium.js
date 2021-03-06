var clientSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/server");
webSocket.onmessage = function (msg) { SendToServer(msg) };
webSocket.onclose = function () { alert("WebSocket connection closed") };

var serverSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/chat");
webSocket.onmessage = function (msg) { SendToClient(msg) };
webSocket.onclose = function () { alert("WebSocket connection closed") };


function SendToServer(message) {
    serverSocket.send(message);
}

function SendToClient(message) {
    clientSocket.send(message);
}