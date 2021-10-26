const Token = require("../models/Token");

module.exports = {
  async Index(req, res) {
    let tokens;
    if (req.query) {
      let query = req.query;
      return res.json(req.query);
      tokens = await Token.find(query);
    } else {
      tokens = await Token.find();
    }
    tokens = await Token.find();
    return res.status(200).json(tokens);
  },
  async Store(req, res) {
    try {
      const { slug } = req.body;
      if (await Token.findOne({ slug }))
      return res.status(400).json({ error: "Token is alread registered" });
      
      const token = await Token.create(req.body);
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async Put(req, res) {
    try {
      let { id } = req.body;
      let token = await Token.updateOne({ id }, { $set: req.body });
      return res.json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async Delete(req, res) {
    try {
      let { id } = req.params;
      let token = await Token.deleteOne({ _id: id });
      return res.json(token);
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async Get(req, res) {
    try {
      let query = req.query;
      let data = await Token.findOne(query);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async Search(req, res) {
    try {
      let query = req.query;
      let data = await Token.find(query);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};