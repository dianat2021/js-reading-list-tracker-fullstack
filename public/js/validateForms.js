export const validateRegisterForm = () => {
  const registerFormFirstname = document.querySelector(
    ".register-form__firstname-input"
  );
  const registerFormLastname = document.querySelector(
    ".register-form__lastname-input"
  );
  const registerFormEmail = document.querySelector(
    ".register-form__email-input"
  );
  const registerFormPassword = document.querySelector(
    ".register-form__password-input"
  );
  const registerFormRepeatPass = document.querySelector(
    ".register-form__repeatpassword-input"
  );
  const firstnameError = document.querySelector(
    ".register-form__firstname-error"
  );
  const lastnameError = document.querySelector(
    ".register-form__lastname-error"
  );
  const emailError = document.querySelector(".register-form__email-error");
  const passwordError = document.querySelector(
    ".register-form__password-error"
  );
  const repeatPassError = document.querySelector(
    ".register-form__repeatpassword-error"
  );
  let isRegisterFormValid = true;
  const registerFormErrors = {
    firstnameError: "First name is required",
    lastnameError: "Last name is required",
    emailError: "Email is required",
    passwordError: "Password is required",
    repeatPasswordError: "Please repeat password",
    passwordMismatchError: "Passwords do not match",
  };

  [
    firstnameError,
    lastnameError,
    emailError,
    passwordError,
    repeatPassError,
  ].forEach((errorMsg) => {
    errorMsg.textContent = "";
  });

  if (!registerFormFirstname.value.trim()) {
    firstnameError.textContent = registerFormErrors.firstnameError;
    isRegisterFormValid = false;
  }
  if (!registerFormLastname.value.trim()) {
    lastnameError.textContent = registerFormErrors.lastnameError;
    isRegisterFormValid = false;
  }
  if (!registerFormEmail.value.trim()) {
    emailError.textContent = registerFormErrors.emailError;
    isRegisterFormValid = false;
  }
  if (!registerFormPassword.value.trim()) {
    passwordError.textContent = registerFormErrors.passwordError;
    isRegisterFormValid = false;
  }
  if (!registerFormRepeatPass.value.trim()) {
    repeatPassError.textContent = registerFormErrors.repeatPasswordError;
    isRegisterFormValid = false;
  }
  if (
    registerFormPassword.value.trim() &&
    registerFormRepeatPass.value.trim()
  ) {
    if (
      registerFormPassword.value.trim() !== registerFormRepeatPass.value.trim()
    ) {
      passwordError.textContent = registerFormErrors.passwordMismatchError;
      repeatPassError.textContent = registerFormErrors.passwordMismatchError;
      isRegisterFormValid = false;
    }
  }
  console.log(isRegisterFormValid);

  return isRegisterFormValid;
};
