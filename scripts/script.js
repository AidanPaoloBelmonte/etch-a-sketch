let stylesheet = document.styleSheets[0];

let regenButton = document.querySelector("#regenerate");
let container = document.querySelector("#container");

let basis = 25;

container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.id === "container") {
    return;
  }

  let currentColor = target.style.backgroundColor;
  let rgba = currentColor
    .replace(/^(rgb|rgba)\(/, "")
    .replace(/\)$/, "")
    .replace(/\s/g, "")
    .split(",");
  let currentAlpha = 0.0;
  if (rgba.length == 4) {
    currentAlpha = parseFloat(rgba[3]);
  } else if (rgba.length == 3) {
    currentAlpha = 1.0;
  }

  currentAlpha = Math.min(currentAlpha + 0.12, 1.0);

  let fillColor = randomColor(currentAlpha);

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

function randomColor(opacity = 0) {
  let color = "#";
  color += Math.floor(Math.random() * 16777215).toString(16);

  if (color.length < 7) {
    let missing = 7 - color.length;
    for (let l = 0; l < missing; l++) {
      color += "0";
    }
  }

  let opacityHex = Math.floor(opacity * 255).toString(16);

  color += `${opacityHex}`;

  return color;
}

generateGrid(4);
