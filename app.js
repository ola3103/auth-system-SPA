require("dotenv").config();
require("express-async-errors");

const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/static", express.static("./frontend/static"));

app.get("/*", (req, res) => {
  res.sendFile("./frontend/index.html", { root: __dirname });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is listening on PORT: ${port}`));
