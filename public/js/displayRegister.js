import displayLogin from "./displayLogin";

const displayRegister = () => {
  // Selecting main and clearing the existing content
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Creating elements
  const registerFormContainer = document.createElement("div");
  const registerForm = document.createElement("form");
  const registerFormTitle = document.createElement("h2");
  const firstnameContainer = document.createElement("div");
  const lastnameContainer = document.createElement("div");
  const emailContainer = document.createElement("div");
  const passwordContainer = document.createElement("div");
  const RepeatpasswordContainer = document.createElement("div");
  const firstnameLabel = document.createElement("label");
  const lastnameLabel = document.createElement("label");
  const emailLabel = document.createElement("label");
  const passwordLabel = document.createElement("label");
  const repeatPasswordLabel = document.createElement("label");
  const firstnameInput = document.createElement("input");
  const lastnameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const repeatPasswordInput = document.createElement("input");
  const registerButton = document.createElement("button");
  const switchToLogin = document.createElement("p");
  const loginFormLink = document.createElement("a");

  // Appending elements
  main.append(registerFormContainer);
  registerFormContainer.append(registerForm);
  registerForm.append(
    registerFormTitle,
    firstnameContainer,
    lastnameContainer,
    emailContainer,
    passwordContainer,
    RepeatpasswordContainer,
    switchToLogin,
    registerButton
  );
  firstnameContainer.append(firstnameLabel, firstnameInput);
  lastnameContainer.append(lastnameLabel, lastnameInput);
  emailContainer.append(emailLabel, emailInput);
  passwordContainer.append(passwordLabel, passwordInput);
  RepeatpasswordContainer.append(repeatPasswordLabel, repeatPasswordInput);
  switchToLogin.append("Already have an account? ", loginFormLink);

  // Populating elements and adding attributes
  registerFormTitle.textContent = "Register";
  firstnameLabel.textContent = "Firstname";
  lastnameLabel.textContent = "Lastname";
  emailLabel.textContent = "Email";
  passwordLabel.textContent = "Password";
  repeatPasswordLabel.textContent = "Repeat password";
  registerButton.textContent = "Register";
  loginFormLink.textContent = "Login here";

  firstnameLabel.htmlFor = "firstname";
  lastnameLabel.htmlFor = "lastname";
  emailLabel.htmlFor = "email";
  passwordLabel.htmlFor = "password";
  repeatPasswordLabel.htmlFor = "repeat-password";

  firstnameInput.id = "firstname";
  lastnameInput.id = "lastname";
  emailInput.id = "email";
  passwordInput.id = "password";
  repeatPasswordInput.id = "repeat-password";
  passwordInput.type = "password";
  repeatPasswordInput.type = "password";
  loginFormLink.href = "#";

  // Adding class names
  registerFormContainer.classList.add("register-container");
  registerForm.classList.add("register-form");
  registerFormTitle.classList.add("register-form__title");
  registerButton.classList.add("register-form__submit-button");

  // Adding event listeners
  loginFormLink.addEventListener("click", (e) => {
    e.preventDefault();
    displayLogin();
  });
};

export default displayRegister;
