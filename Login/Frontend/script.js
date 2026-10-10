function login() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  // Validación simple
  if (usuario === "admin" && password === "123") {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("nombreUsuario").textContent = usuario;
  } else {
    alert("Credenciales inválidas. Intenta de nuevo.");
  }
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
}
