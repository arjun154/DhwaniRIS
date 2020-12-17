function boxClicked(item) {
  // getting the current zIndex of clicked box
  let value = window.getComputedStyle(item).zIndex;

  if (item.id !== "5") {
    let value5 = Number(
      window.getComputedStyle(document.getElementById(5)).zIndex
    );
    if (value > value5) {
      document.getElementById(item.id).style.zIndex = value5 - 1;
    } else {
      document.getElementById(item.id).style.zIndex = value5 + 1;
    }
  } else {
    let value1 = Number(
      window.getComputedStyle(document.getElementById(1)).zIndex
    );
    let value2 = Number(
      window.getComputedStyle(document.getElementById(2)).zIndex
    );
    let value3 = Number(
      window.getComputedStyle(document.getElementById(3)).zIndex
    );
    let value4 = Number(
      window.getComputedStyle(document.getElementById(4)).zIndex
    );
    let maxValue = Math.max(value1, value2, value3, value4);
    if (value > maxValue) {
      document.getElementById(item.id).style.zIndex = maxValue - 1;
    } else {
      document.getElementById(item.id).style.zIndex = maxValue + 1;
    }
  }
}

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", () => {
    boxClicked(item);
  });
});
