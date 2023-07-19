const WebSocket = require('ws');
const fs = require("fs")
const conf = JSON.parse(fs.readFileSync("conf.json", 'utf8'))
const discordclient = require('./lib/suke_DI_lib.js');
function ws(DI) {
    const server = new WebSocket.Server({ port: conf.port });
    server.on('connection', (socket) => {
        console.log(`New client connected: ${socket._socket.remoteAddress}:${socket._socket.remotePort}`);

        socket.on('message', (message) => {
            const ms = JSON.parse(message)
            if (ms.type !== "token") {
                if (conf[ms.type]) {
                    if (ms.message !== "" && ms.message !== undefined) {
                        discordclient.channelsend.call(DI, conf[ms.type].cid, ms.message)
                    }
                }
            }
        });
        socket.on('close', () => {
            console.log('Client disconnected');
        });
    });
    console.log('WebSocket server started on port ' + conf.port);
}
async function main() {
    const DI = await discordclient.login(conf.token);
    ws(DI);
}
main();