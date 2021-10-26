const routes = require("express").Router();
const TokenController = require("./controllers/TokenController");

routes.get("/", async (req, res) => {
  res.status(200).json("ok");
});

routes.get("/tokens", TokenController.Index);
routes.post("/tokens", TokenController.Store);
routes.put("/tokens", TokenController.Put);
routes.delete("/tokens/:id", TokenController.Delete);
routes.get("/tokens/get", TokenController.Get);
routes.get("/tokens/search", TokenController.Search);

module.exports = routes;