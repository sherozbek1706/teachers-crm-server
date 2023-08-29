const express = require("express");
const config = require("./shared/config");
const app = express();

// PORT aniqlab olish
const PORT = config.port || 8080;

app.listen(PORT, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${PORT}`);
});
