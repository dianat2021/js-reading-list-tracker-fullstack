const displayLogin = () => {
  const main = document.querySelector("main");

  // Creating elements
  const loginFormContainer = document.createElement("div");
  const loginForm = document.createElement("form");
  const loginFormTitle = document.createElement("h2");
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
    emailLabel,
    passwordLabel,
    emailInput,
    passwordInput,
    loginButton,
    switchToRegister
  );
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
};

export default displayLogin;
