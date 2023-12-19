const linkForm = document.querySelector(".login-form");

linkForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
