const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usuarios de ejemplo
const usuarios = [
  { email: "admin@correo.com", password: "123" },
  { email: "usuario@correo.com", password: "456" }
];

// Ruta de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const usuario = usuarios.find(
    (u) => u.email === email && u.password === password
  );

  if (usuario) {
    res.json({ mensaje: "Login exitoso ✅" });
  } else {
    res.status(401).json({ mensaje: "Credenciales inválidas ❌" });
  }
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
