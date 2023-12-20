function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const linkBoxes = document.querySelector("#boxes");
const linkForm = document.querySelector("#controls");
const linkBtnCreate = document.querySelector("button[data-create]");
const linkBtnDestroy = document.querySelector("button[data-destroy]");
const linkInput = document.querySelector("input");

function destroyBoxes() {
  linkBoxes.innerHTML = "";
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    linkInput.value = "";
    destroyBoxes();
    const masDiv = [];
    let size = 30;

    for (let i = 1; i <= amount; i++) {
      const divEl = document.createElement("div");

      divEl.style.width = `${size}px`;
      divEl.style.height = `${size}px`;
      divEl.style.backgroundColor = getRandomHexColor();
      size += 10;
      masDiv.push(divEl);
    }
    linkBoxes.append(...masDiv);
  }
}

linkBtnCreate.addEventListener("click", () =>
  createBoxes(Number(linkInput.value))
);

linkBtnDestroy.addEventListener("click", () => destroyBoxes());
