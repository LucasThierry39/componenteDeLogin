const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const firstNameInput = document.querySelector('input[name="First Name"]');
  const lastNameInput = document.querySelector('input[name="Last Name"]');
  const emailInput = document.querySelector('input[name="Email"]');
  const passwordInput = document.querySelector('input[name="Password"]');
  const icons = document.querySelectorAll('input[name="iconError"]');
  const errorMessages = document.querySelectorAll(".error-message");

  const fields = [firstNameInput, lastNameInput, emailInput, passwordInput];

  fields.forEach((field, index) => {
    const errorMessage = errorMessages[index];
    const icon = icons[index];

    if (field.value.trim() === "") {
      field.style.border = "2px solid hsl(0, 100%, 74%)";
      errorMessage.classList.add("active");
      icon.classList.add("active");
      emailInput.placeholder = "email@example/com"
    } else {
      field.style.border = "";
      errorMessage.classList.remove("active");
      icon.classList.remove("active");
    }
  });
});