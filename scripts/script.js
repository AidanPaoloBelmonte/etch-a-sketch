let stylesheet = document.styleSheets[0];

let container = document.querySelector("#container");

let basis = 25;

container.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.id === "container") {
    return;
  }

  target.setAttribute(
    "style",
    `flex-basis: ${basis}%; background-color: black;`,
  );
});

function generateGrid(base) {
  if (container === null) {
    return;
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

generateGrid(4);
