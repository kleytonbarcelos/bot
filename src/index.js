const express = import("express");
const app = express();
const mongoose = import("mongoose");
const dotenv = import("dotenv");
const cors = import("cors");
const morgan = import("morgan");
const http = import("http");

dotenv.config();

const routes = import("./routes");
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log("Connected to DB");
  }
);

app.use(routes);

server.listen(process.env.PORT || 3333, () => {
  console.log("Server Up and running");
});