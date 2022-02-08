const port = 3333;

const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

app.use(express.static("./public"));

const db = require("./Models/db");

app.listen(port, () => {
  console.log(`YO JOE!  Coming in HOT on http://localhost:${port}`);
});
