require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./src/config/db");
var cors = require("cors");

app.use(cors());

const user_controller = require("./src/controllers/user_controller");
const products_controller = require("./src/controllers/products_controller");
const women_controller = require("./src/controllers/women_controller");
const men_controller = require("./src/controllers/men_controller");
const kids_controller = require("./src/controllers/kids_controller");

app.use("/user", user_controller);
app.use("/products", products_controller);
app.use("/women", women_controller);
app.use("/men", men_controller);
app.use("/kids", kids_controller);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});