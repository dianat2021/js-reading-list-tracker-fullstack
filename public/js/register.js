const register = async (firstname, lastname, email, password) => {
  try {
    const response = await fetch("http://localhost:6006/api/v1/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname.value.trim(),
        lastname: lastname.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log("Data", data);

    const { token } = data;
    console.log(token);

    localStorage.setItem("token", token);
    window.location.href = "/main";
  } catch (error) {
    console.log(error);
  }
};
export default register;
