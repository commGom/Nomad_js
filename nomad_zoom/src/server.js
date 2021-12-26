import express from "express";
import http from 'http';
import WebSocket from "ws";

//application 만들어주기
const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

//1. 서버에 접근할 수 있다. (http 서버)
const server = http.createServer(app);

//2. websocket 서버 생성, http 서버를 넣어줌으로써 websocket 서버와 http 서버 둘다 작동 가능
const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  console.log("Connected to Browser✅")
  socket.send("Hello~");
  socket.on("message", (message) => {
    sockets.forEach(aSocket => {
      aSocket.send(message.toString('utf8'));
    });
  });
  socket.on("close", () => console.log("Disconnected from the browser❌"));
});



server.listen(3000, handleListen);