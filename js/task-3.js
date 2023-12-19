const nameInput = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const inputContent = e.target.value.trim();
  if (inputContent === "") {
    nameSpan.textContent = "Anonymous";
  } else {
    nameSpan.textContent = inputContent;
  }
});
