const routes = require("express").Router();
const TokenController = require("./controllers/TokenController");

routes.get("/", async (req, res) => {
  res.status(200).json("ok");
});

routes.get("/tokens", TokenController.index);
routes.post("/tokens", TokenController.store);
routes.put("/tokens", TokenController.put);
routes.delete("/tokens/:id", TokenController.delete);
routes.get("/tokens/get", TokenController.get);
routes.get("/tokens/search", TokenController.search);

module.exports = routes;