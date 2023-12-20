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
  let syze = 30;
  const masDiv = [];
  if (amount >= 1 && amount <= 100) {
    linkInput.value = "";
    destroyBoxes();
    for (let i = 1; i <= amount; i++) {
      const divEl = document.createElement("div");

      syze += 10;

      divEl.style.width = `${syze}px`;
      divEl.style.height = `${syze}px`;
      divEl.style.backgroundColor = getRandomHexColor();
      masDiv.push(divEl);
    }
  }
  linkBoxes.append(...masDiv);
  console.log(masDiv);
}

linkBtnCreate.addEventListener("click", () =>
  createBoxes(Number(linkInput.value))
);

linkBtnDestroy.addEventListener("click", () => destroyBoxes());
