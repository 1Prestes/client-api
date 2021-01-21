const { update } = require("../models/client");
const Client = require("../models/client");

module.exports = {
  async create(req, res) {
    try {
      const client = await Client.create(req.body);
      return res.send(client);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async index(req, res) {
    try {
      const clients = await Client.find({});
      return res.send(clients);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async show(req, res) {
    try {
      const client = await Client.findById(req.params.id);
      return res.send(client);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async destroy(req, res) {
    try {
      const client = await Client.findByIdAndDelete(req.params.id);
      return res.send(client);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async update(req, res) {
    const {
      id,
      name,
      address,
      neighborhood,
      city,
      uf,
      telephone,
      email,
    } = req.body;

    const client = { name, address, neighborhood, city, uf, telephone, email };

    try {
      await Client.updateOne({ _id: id }, client);
      return res.send(await Client.findById(id));
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
};
