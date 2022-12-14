// Event handler to manage user login
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const warning = document.querySelector(".login-warning");
  if (!username || !password) {
    warning.style.display = "block";
  } else if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      warning.style.display = "block";
      // alert(response.statusText);
    }
  }
};

// Event handler to manager new user signup
const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (!username || !password || password.length < 8) {
    const warning = document.querySelector(".signup-warning");
    warning.style.display = "block";
  } else if (username && password) {
    const response = await fetch("/api/user/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// Link Event Handler Functions to linked HTML
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
