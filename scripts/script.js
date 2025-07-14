let stylesheet = document.styleSheets[0];

let container = document.querySelector("#container");

function generateGrid(base) {
  if (container === null) {
    return;
  }

  for (let l = 0; l < base * base; l++) {
    let ele = document.createElement("div");
    ele_id = l.toString();

    ele.setAttribute("class", `box item${ele_id}`);
    ele.setAttribute("style", `flex-basis: ${100 / base}%`);

    container.appendChild(ele);
  }
}

generateGrid(25);
