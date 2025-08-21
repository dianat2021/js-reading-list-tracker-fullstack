export const login = async (email, password) => {
  try {
    const response = await fetch("http://localhost:6006/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to login");
    }
    const data = await response.json();
    const {
      user: { token },
    } = data;
    if (!token) {
      return false;
    }
    localStorage.setItem("token", token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
