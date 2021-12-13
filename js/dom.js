// document 객체 : javascript 가 HTML DOM 에 접근 가능하다.
// Event 처리 addEventListener("이벤트명",콜백함수);
// ex) document element event : click, mouseenter, mouseleave
// ex) window event : resize, copy, online, offline (<-wifi 연결 on off)

const title = document.querySelector("h1");
console.log(title);
console.log(title.innerText);
title.innerText = "Got you!";
function handleTitleClick() {
    title.style.backgroundColor = 'yellow';
    console.log('title was clicked');
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert('copied');
}
title.onclick = handleTitleClick;
title.addEventListener('mouseenter', () => {
    console.log("mouse Entered");
})
title.addEventListener('mouseleave', () => {
    console.log("mouse leave");
})

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", () => {
    alert('SOS No wifi');
})
window.addEventListener("online", () => {
    alert('All Good');
})