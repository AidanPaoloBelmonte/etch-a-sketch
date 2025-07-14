let stylesheet = document.querySelector("style");

let container = document.querySelector("#container");

function generateGrid(base) {
  if (container === null) {
    return;
  }

  for (let l = 0; l < base * base; l++) {
    let ele = document.createElement("div");
    ele_id = l.toString();

    ele.setAttribute("class", `box basis item${ele_id}`);

    container.appendChild(ele);
  }
}

function changeFlexBasis(basis) {
  if (stylesheet === null) {
    console.error("Stylesheet was not fetched!");
  }

  stylesheet.removeRule(-1);
  stylesheet.insertRule(`.basis { flex-basis: ${basis};}`, -1);
}

generateGrid(4);
