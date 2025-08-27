export const validateLoginForm = () => {
  const loginFormEmailInput = document.querySelector(
    ".login-form__email-input"
  );
  const loginFormPasswordInput = document.querySelector(
    ".login-form__password-input"
  );
  const loginFormEmailError = document.querySelector(
    ".login-form__email-error"
  );
  const loginFormPasswordError = document.querySelector(
    ".login-form__password-error"
  );
  const loginErrors = {
    emptyEmailError: "Email is required",
    passwordError: "Password is required",
    invalidEmailError: "Please enter a valid email address",
  };
  let isLoginFormValid = true;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  [loginFormEmailError, loginFormPasswordError].forEach((errorMsg) => {
    errorMsg.textContent = "";
    errorMsg.classList.remove("login-form__input--error");
  });

  if (!loginFormEmailInput.value.trim()) {
    loginFormEmailError.textContent = loginErrors.emptyEmailError;
    loginFormEmailError.classList.add("login-form__input--error");
    isLoginFormValid = false;
  } else if (!emailRegex.test(loginFormEmailInput.value.trim())) {
    loginFormEmailError.textContent = loginErrors.invalidEmailError;
    loginFormEmailError.classList.add("login-form__input--error");
    isLoginFormValid = false;
  }
  if (!loginFormPasswordInput.value.trim()) {
    loginFormPasswordError.textContent = loginErrors.passwordError;
    loginFormPasswordError.classList.add("login-form__input--error");
    isLoginFormValid = false;
  }

  return isLoginFormValid;
};
