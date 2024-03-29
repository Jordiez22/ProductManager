const Contenedor = require("../ProductManager.js");
const c = new Contenedor("../Products.json");
const express = require("express");
const app = express();
const PORT = 8080;
let products = [];
let randomProd = [];

const server = app.listen(PORT, () => {
  console.log(`Server HTTP escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/products", (req, res) => {
  c.getAll().then(function (result) {
    products = result;
  });
  res.send(products);
});

app.get("/productoRandom", (req, res) => {
  c.getAll().then(function (result) {
    randomProd = result;
  });
  res.send(randomProd[Math.floor(Math.random() * randomProd.length)]);
});