let websocket;

function wsConnect(url, { onOpen, onClose, onMessage, onError }) {
  websocket = new WebSocket(url);

  console.log("Connecting to websocket server on:", url);

  // Connect to WebSocket server
  // Assign callbacks
  websocket.onopen = function(evt) {
    onOpen(evt);
  };

  websocket.onclose = function(evt) {
    onClose(evt);

    setTimeout(() => {
      wsConnect(url, { onOpen, onClose, onMessage, onError });
    }, 1000);
  };

  websocket.onmessage = function(evt) {
    onMessage(evt);
  };

  websocket.onerror = function(evt) {
    onError(evt);
  };
}

// Sends a message to the server (and prints it to the console)
function doSend(message) {
  websocket.send(message);
}

export { wsConnect, doSend };
