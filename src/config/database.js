const mongoose = require("mongoose");
require("dotenv-safe").config();
const uri = `mongodb+srv://gestor:${process.env.PASSWORD}@zukk.n1dfs.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { Mongoose: mongoose };
