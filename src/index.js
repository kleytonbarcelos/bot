require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");
const http = require("http");
const server = http.Server(app);
const routes = require("./routes");
const connectToDatabase = require('./database')
connectToDatabase()
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


server.listen(process.env.PORT || 3333, () => {
  console.log("Server Up and running on ");
});