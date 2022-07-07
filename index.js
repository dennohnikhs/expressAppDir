const express = require("express");
const v1Router = require("./src/v1/routes/routes");
const app = express();

app.use(v1Router);

app.listen(1996, () => {
  console.log("Server started ....");
});
