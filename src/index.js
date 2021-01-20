const express = require("express");
const bodyParser = require("body-parser");
require("dotenv-safe").config();

const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => console.log("Server Running!"));
