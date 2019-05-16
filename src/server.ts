import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");
import * as config from "./config";

const app: express.Application = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "./content")));

app.get("/api/hello", async (req, res) => {
  res.send("Hello world!");
});

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./content/", "index.html"));
});

app.listen(config.PORT, function () {
  console.log(`App running on port ${config.PORT}`);
});

