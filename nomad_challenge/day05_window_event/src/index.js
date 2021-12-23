window.addEventListener("resize", () => {
  console.log("resizing");
  const width = window.innerWidth;
  let color = "white";
  if (width < 150) {
    color = "purple";
  } else if (width < 400) {
    color = "red";
  } else if (width < 600) {
    color = "green";
  } else if (width < 800) {
    color = "blue";
  } else if (width < 1000) {
    color = "black";
  }
  document.body.style.backgroundColor = color;
});
