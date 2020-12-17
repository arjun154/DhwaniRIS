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
    if (value !== "2") {
      document.getElementById(item.id).style.zIndex = 2;
    } else {
      document.getElementById(item.id).style.zIndex = 0;
    }
  }
}

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", () => {
    boxClicked(item);
  });
});
