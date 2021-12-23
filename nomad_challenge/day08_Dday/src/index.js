const clockTitle = document.querySelector(".js-clock");

function calculateDday() {
  const now = new Date(Date.now());
  const christmasEve = new Date(2021, 11, 24);
  let dDayDateTime = christmasEve.getTime() - now.getTime();
  console.log(now, christmasEve);
  dDayDateTime = dDayDateTime / (1000 * 60 * 60 * 24);
  const dDay = Math.floor(dDayDateTime);
  dDayDateTime = (dDayDateTime - dDay) * 24;
  const dHour = Math.floor(dDayDateTime);
  dDayDateTime = (dDayDateTime - dHour) * 60;
  const dMinute = Math.floor(dDayDateTime);
  dDayDateTime = (dDayDateTime - dMinute) * 60;
  const dSecond = Math.floor(dDayDateTime);
  console.log(dDay, dHour, dMinute, dSecond);
  return `${String(dDay)}d ${String(dHour).padStart(2, 0)}h ${String(dMinute).padStart(2, 0)}m ${String(dSecond).padStart(2, 0)}`;
}
setTimeout(() => {
  clockTitle.innerText = calculateDday();
}, 0);
setInterval(() => {
  clockTitle.innerText = calculateDday();
}, 1000)