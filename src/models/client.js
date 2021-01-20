const mongoose = require("../config/database");
const { Schema } = mongoose;

const clientSchema = new Schema({
  name: String,
  address: String,
  neighborhood: String,
  city: String,
  uf: String,
  telephone: String,
  email: String,
});

const client = mongoose.model("Client", clientSchema);

module.exports = client;
