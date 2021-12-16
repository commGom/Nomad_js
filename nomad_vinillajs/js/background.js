const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
]
const chosenImage = images[parseInt(Math.random() * images.length)];
console.log(chosenImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);