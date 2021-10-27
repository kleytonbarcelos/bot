const Token = require("../models/Token");

module.exports = {
  async index(req, res) {
    let tokens;
    if (Object.keys(req.query).length) {
      tokens = await Token.find(req.query);
    } else {
      tokens = await Token.find();
    }
    return res.status(200).json(tokens);
  },
  async store(req, res) {
    try {
      const { slug } = req.body; //unique iditification
      if (await Token.findOne({ slug }))
      return res.status(400).json({ error: "Token is alread registered" });
      
      const token = await Token.create(req.body);
      return res.status(200).json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async put(req, res) {
    try {
      let { _id } = req.body;
      let token = await Token.updateOne({ _id }, { $set: req.body });
      return res.status(200).json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async delete(req, res) {
    try {
      let { id } = req.params;
      let token = await Token.deleteOne({ _id: id });
      return res.json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async get(req, res) {
    try {
      let query = req.query;
      let data = await Token.findOne(query);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async search(req, res) {
    try {
      let query = req.query;
      let data = await Token.find(query);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};