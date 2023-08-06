import WebSocket from "ws";

// WS server port
const port = 8181;

// Init new WS connection
const ws = new WebSocket(`ws://localhost:${port}`)

ws.on('open', ()=>{
    ws.send(`Ping pn`)
})

ws.on('message', (data)=>{
    console.log(`Server's response`)
    console.log(`${data}`)
})