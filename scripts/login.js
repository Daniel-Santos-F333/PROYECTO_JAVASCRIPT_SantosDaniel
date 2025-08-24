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

  async function fetchUsers() {
      try {
          const res = await fetch('https://68aa9a2b909a5835049c94fe.mockapi.io/users');
          const data = await res.json();
          return data;
      } catch (error) {
          console.error("Error al conectar con la API:", error);
          errorMessage.textContent = "Error al conectarse con el servidor.";
          return [];
      }
  }

  fetchUsers().then(users => {
      console.log("Usuarios obtenidos:", users);
  });
});

document.getElementById("username").addEventListener("input", () => {
  document.getElementById("errorMessage").textContent = "";
});

document.getElementById("password").addEventListener("input", () => {
  document.getElementById("errorMessage").textContent = "";
});