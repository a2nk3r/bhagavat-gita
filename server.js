const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const verses = require("./assets/bhagavat_gita_verse.json");

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get("/api/verses", (req, res) => {
    res.send(verses);
  })
  .listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
