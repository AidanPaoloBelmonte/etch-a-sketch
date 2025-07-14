let stylesheet = document.styleSheets[0];

let regenButton = document.querySelector("#regenerate");
let container = document.querySelector("#container");

let basis = 25;

container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.id === "container" || target.className == "box filled") {
    return;
  }

  let fillColor = randomColor();

  target.setAttribute("class", "box filled");
  target.setAttribute(
    "style",
    `flex-basis: ${basis}%; background-color: ${fillColor};`,
  );
});

regenButton.addEventListener("click", (e) => {
  let resolution = parseInt(prompt("Set a new grid resolution (1-100):"));
  while (isNaN(resolution) || resolution < 1 || resolution > 100) {
    resolution = parseInt(
      prompt("Invalid Resolution! Please set a resolution between 1-100."),
    );
  }

  generateGrid(resolution);
});

function generateGrid(base) {
  if (container === null) {
    return;
  }

  if (container.hasChildNodes()) {
    let childCount = container.children.length;
    for (let l = 0; l < childCount; l++) {
      container.removeChild(container.children[0]);
    }
  }

  basis = 100 / base;

  for (let l = 0; l < base * base; l++) {
    let ele = document.createElement("div");
    ele_id = l.toString();

    ele.setAttribute("class", "box");
    ele.setAttribute("id", `item-${l}`);
    ele.setAttribute("style", `flex-basis: ${basis}%;`);

    container.appendChild(ele);
  }
}

function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let l = 0; l < 6; l++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}

generateGrid(4);
