const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv-safe").config();

const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(3030, () => console.log("Server Running!"));
