//클릭할 때, 색 변하도록

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);
h1.innerText = "Click Me";

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === 'black') {
        newColor = "tomato";
    } else {
        newColor = "black";
    }
    h1.style.color = newColor;
}

h1.onclick = handleTitleClick;
