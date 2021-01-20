const Client = require("../models/client");

module.exports = {
  async create(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.send(client);
    } catch (err) {
      return res
        .status(400)
        .send({ error: err });
    }
  }
};
