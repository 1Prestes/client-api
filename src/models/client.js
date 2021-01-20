const mongoose = require("../config/database");
const { Schema } = mongoose;

const clientSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  uf: { type: String, required: true },
  telephone: { type: String, unique: true },
  email: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
