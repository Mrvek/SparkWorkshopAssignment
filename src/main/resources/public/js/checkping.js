var clientSocket = new WebSocket("ws://" + location.hostname + ":" + location.port + "/ping");
webSocket.onmessage = function (msg) { ;
webSocket.onclose = function () { alert("WebSocket connection closed") };
webSocket.onconnect = function() {clientSocket.send("ping!")}
