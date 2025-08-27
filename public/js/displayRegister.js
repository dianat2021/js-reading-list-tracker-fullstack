import { displayLogin } from "./displayLogin.js";
import register from "./register.js";
import { validateRegisterForm } from "./validateRegisterForm.js";

export const displayRegister = () => {
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
  const firstnameError = document.createElement("span");
  const lastnameError = document.createElement("span");
  const emailError = document.createElement("span");
  const passwordError = document.createElement("span");
  const repeatPasswordError = document.createElement("span");
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
  firstnameContainer.append(firstnameLabel, firstnameInput, firstnameError);
  lastnameContainer.append(lastnameLabel, lastnameInput, lastnameError);
  emailContainer.append(emailLabel, emailInput, emailError);
  passwordContainer.append(passwordLabel, passwordInput, passwordError);
  RepeatpasswordContainer.append(
    repeatPasswordLabel,
    repeatPasswordInput,
    repeatPasswordError
  );
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
  firstnameInput.classList.add("register-form__firstname-input");
  lastnameInput.classList.add("register-form__lastname-input");
  emailInput.classList.add("register-form__email-input");
  passwordInput.classList.add("register-form__password-input");
  repeatPasswordInput.classList.add("register-form__repeatpassword-input");
  firstnameError.classList.add("register-form__firstname-error");
  lastnameError.classList.add("register-form__lastname-error");
  emailError.classList.add("register-form__email-error");
  passwordError.classList.add("register-form__password-error");
  repeatPasswordError.classList.add("register-form__repeatpassword-error");

  // Adding event listeners
  loginFormLink.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", "/login");
    displayLogin();
  });
};

export const setupRegisterForm = () => {
  const form = document.querySelector(".register-form");
  if (!form) return;

  const firstname = document.querySelector(".register-form__firstname-input");
  const lastname = document.querySelector(".register-form__lastname-input");
  const email = document.querySelector(".register-form__email-input");
  const password = document.querySelector(".register-form__password-input");
  const repeatPassword = document.querySelector(
    ".register-form__repeatpassword-input"
  );

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateRegisterForm()) {
      return;
    }

    await register(firstname, lastname, email, password, repeatPassword);
  });
};
