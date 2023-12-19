function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const linkButton = document.querySelector(".change-color");
const linkBody = document.querySelector("body");
const linkSpan = document.querySelector(".color");
linkButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  linkBody.style.backgroundColor = randomColor;
  linkSpan.textContent = randomColor;
});
