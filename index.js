const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5555;

express()
  .use(express.static(path.join(__dirname, "public")))
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
