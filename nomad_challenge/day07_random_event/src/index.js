const info = document.querySelector("#info");
const result = document.querySelector("#result");
const playBtn = document.querySelector("#playBtn");
const maxNumber = document.querySelector("#maxNumber");
const userNumber = document.querySelector("#userNumber");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Play!")
  const randomNumber = Math.floor(Math.random() * (parseInt(maxNumber.value) + 1));
  const userNumber_val = parseInt(userNumber.value);
  let info_val = `You chose : ${userNumber_val}, the machine chose : ${randomNumber}`;
  let result_val = "You Lost!";
  if (userNumber_val === randomNumber) {
    result_val = 'You Won!';
  }
  info.innerText = info_val;
  result.innerText = result_val;
})