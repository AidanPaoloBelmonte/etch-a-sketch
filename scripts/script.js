let container = document.querySelector("#container");

function initialize_grid() {
  if (container === null) {
    return;
  }

  for (let l = 0; l < 16; l++) {
    let ele = document.createElement("div");
    ele.setAttribute("class", `box {l}`);

    container.appendChild(ele);
  }
}

initialize_grid();
