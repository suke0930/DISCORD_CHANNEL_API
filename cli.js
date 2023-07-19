const WebSocket = require('ws');
const wss = new WebSocket('ws://localhost:10');
wss.on('open', () => {
    ws.send(JSON.stringify({ type: "temp1", message: "its the test messege." }));
    ws.send(JSON.stringify({ type: "temp2", message: "its the test messege" }));
});