const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const h2 = document.querySelector("h2");
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  onMouseenter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  onMouseleave: () => {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  onContextMenu() {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[2];
  },
  onResize: () => {
    h2.innerText = "You just resized!";
    h2.style.color = colors[3];
  }
};

h2.addEventListener("mouseenter", superEventHandler.onMouseenter);
h2.addEventListener("mouseleave", superEventHandler.onMouseleave);
window.addEventListener("contextmenu", superEventHandler.onContextMenu);
window.addEventListener("resize", superEventHandler.onResize);


// mouseenter : 마우스가 위로 올라갔을 때 발생하는 이벤트입니다. 
// mouseleave : 마우스가 떠났을 때 발생하는 이벤트입니다. 
// contextmenu : 사용자가 요소를 마우스 우 클릭해 메뉴를 열 때 발생하는 이벤트입니다. 
// resize : 브라우저 창의 사이즈가 변할 때 발생하는 이벤트입니다. 