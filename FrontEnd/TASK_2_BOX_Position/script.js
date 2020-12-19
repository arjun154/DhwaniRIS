let prevValue;
function boxClicked(item) {
  // getting the current zIndex of clicked box
  let value = window.getComputedStyle(item).zIndex;

  // if cliked box is not 5 then change the value of the clicked box according to box 5 z-index
  if (item.id !== "5") {
    let value5 = Number(
      window.getComputedStyle(document.getElementById(5)).zIndex
    );
    if (value > value5) {
      prevValue = value5 - 1;
      item.style.zIndex = prevValue;
    } else {
      prevValue = value5 + 1;
      item.style.zIndex = prevValue;
    }
  }
  // if box 5 is clicked then change the value of box 5 according to last clicked box z-index
  else {
    if (value > prevValue) {
      item.style.zIndex = prevValue - 1;
    } else {
      item.style.zIndex = prevValue + 1;
    }
  }
}

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", () => {
    boxClicked(item);
  });
});
