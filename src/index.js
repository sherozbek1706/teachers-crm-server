const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const app = express();

// PORT aniqlab olish
const PORT = config.port || 8080;

// middleware
app.use(cors());

// DATABAZAGA ULANISH
db();

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${PORT}`);
});
