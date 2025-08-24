window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  console.log("Usuario:", username);
  console.log("Contraseña:", password);
});