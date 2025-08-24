window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";

  if (!username || !password) {
      errorMessage.textContent = "Por favor complete todos los campos.";
      return;
  }

  console.log("Inputs válidos");
});

document.getElementById("username").addEventListener("input", () => {
  document.getElementById("errorMessage").textContent = "";
});

document.getElementById("password").addEventListener("input", () => {
  document.getElementById("errorMessage").textContent = "";
});
