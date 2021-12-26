const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener("open", () => {
  console.log("Connected to Browser✅");
});

socket.addEventListener("message", (message) => {
  console.log("Just Got this:", message, "from the server");
  console.log("Just Got this:", message.data, "from the server");
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server❌");
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";

}
messageForm.addEventListener("submit", handleSubmit);

// //10초 후 동작
// setTimeout(() => {
//   socket.send("Hello from the Browser");
// }, 10000)