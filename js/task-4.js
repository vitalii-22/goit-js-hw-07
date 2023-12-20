const linkForm = document.querySelector(".login-form");

linkForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.elements.email.value.trim();
  const passwordInput = form.elements.password.value.trim();

  if (emailInput === "" || passwordInput === "") {
    return alert("All form fields must be filled in");
  }

  console.log({ email: emailInput, password: passwordInput });
  form.reset();
}
