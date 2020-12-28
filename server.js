const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4200;
const INDEX = "/index.html";
const server = express();

server.use(express.static(path.join(__dirname, "public")));

server
  .use((req, res) => {
    res.sendFile(INDEX, { root: __dirname });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = server;
