import displayRegister from "./displayRegister";

const displayLogin = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Creating elements
  const loginFormContainer = document.createElement("div");
  const loginForm = document.createElement("form");
  const loginFormTitle = document.createElement("h2");
  const emailContainer = document.createElement("div");
  const passwordContainer = document.createElement("div");
  const emailLabel = document.createElement("label");
  const passwordLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const passwordInput = document.createElement("input");
  const loginButton = document.createElement("button");
  const switchToRegister = document.createElement("p");
  const registerFormLink = document.createElement("a");

  // Appending elements
  main.append(loginFormContainer);
  loginFormContainer.append(loginForm);
  loginForm.append(
    loginFormTitle,
    emailContainer,
    passwordContainer,
    loginButton,
    switchToRegister
  );
  emailContainer.append(emailLabel, emailInput);
  passwordContainer.append(passwordLabel, passwordInput);
  switchToRegister.append("Don't have an account? ", registerFormLink);
  // Populating elements and adding attributes
  loginFormTitle.textContent = "Login";
  emailLabel.textContent = "Email";
  passwordLabel.textContent = "Password";
  loginButton.textContent = "Login";
  registerFormLink.textContent = "Register here";

  emailLabel.htmlFor = "email";
  passwordLabel.htmlFor = "password";
  emailInput.id = "email";
  passwordInput.id = "password";
  emailInput.name = "email";
  passwordInput.name = "password";
  emailInput.placeholder = "Enter your email address";
  passwordInput.placeholder = "Enter your password";
  registerFormLink.href = "#";

  // Adding class names
  loginFormContainer.classList.add("login-container");
  loginForm.classList.add("login-form");
  loginFormTitle.classList.add("login-form__title");
  emailContainer.classList.add("login-form__email-container");
  passwordContainer.classList.add("login-form__password-container");
  emailInput.classList.add("login-form__email-input");
  passwordInput.classList.add("login-form__password-input");
  loginButton.classList.add("login-form__submit-button");
  registerFormLink.classList.add("login-form__register-link");

  // Adding event listeners
  registerFormLink.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState(null, "", "/register");
    displayRegister();
  });
};

export default displayLogin;
