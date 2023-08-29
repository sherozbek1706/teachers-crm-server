const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const app = express();

// PORT aniqlab olish
const PORT = config.port || 8080;

// import handleError
const handleError = require("./shared/errors/handle");

// middleware
app.use(cors());
app.use(express.json());

// DATABAZAGA ULANISH
db();

// Middleware Error
app.use(handleError);

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${PORT}`);
});
