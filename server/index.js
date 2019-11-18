const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 4000 });

let interval = 2000;
let led = [
  {
    condition: true
  },
  {
    condition: true
  },
  {
    condition: true
  }
];

wss.on("connection", function connection(ws) {
  console.log("connected to port 4000");

  let wsInterval = plotData(ws);

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    const clientMessage = JSON.parse(message);

    switch (clientMessage.command) {
      case "interval":
        interval = clientMessage.data;
        clearInterval(wsInterval);
        wsInterval = plotData(ws);
        break;
      case "led":
        ledToggle(ws, clientMessage.data);
        break;
      default:
        break;
    }
  });
});

const plotData = ws =>
  setInterval(() => {
    ws.send(
      JSON.stringify({
        command: "plot",
        voltage: Math.random() * 100,
        amphere: Math.random() * 100
      })
    );
  }, interval);

const ledToggle = (ws, ledNum) => {
  const selectedLedCondition = !led[ledNum - 1].condition;
  led[ledNum - 1].condition = selectedLedCondition;

  ws.send(
    JSON.stringify({
      command: "led",
      led: ledNum,
      condition: selectedLedCondition ? "off" : "on"
    })
  );
};
