const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());  
app.use(express.static("public"));  

const connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "",
  database: "chimu_joyeria"
});

connection.connect(err => {
  if (err) {
    console.error("Error de conexión a MySQL:", err);
  } else {
    console.log("Conectado a la base de datos MySQL");
  }
});

app.post("/guardar-pqrs", (req, res) => {
  const { mensaje } = req.body;

  if (!mensaje || mensaje.trim() === "") {
    return res.status(400).json({ status: "error", message: "El mensaje está vacío" });
  }

  connection.query("INSERT INTO pqrs (mensaje) VALUES (?)", [mensaje.trim()], (err, results) => {
    if (err) {
      console.error("Error al guardar:", err);
      return res.status(500).json({ status: "error", message: "Error al guardar en base de datos" });
    }
    res.json({ status: "success", message: "Mensaje guardado" });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
