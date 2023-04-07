const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const CategoriesData = require("./Data/Categories.json");
const DetailsData = require("./Data/Details");

app.get("/", (req, res) => {
  res.send("Gift Server is Running");
});

app.listen(port, () => {
  console.log("Server is Running in port", port);
});

app.get("/giftcategories", (req, res) => {
  res.send(CategoriesData);
});

app.get("/giftdetails", (req, res) => {
  res.send(DetailsData);
});

app.get("/giftcategories/:id", (req, res) => {
  const id = req.params.id;
  const selectgift = DetailsData.filter((detail) => detail.category_id === id);
  res.send(selectgift);
});

app.get("/giftdetails/:id", (req, res) => {
  const id = req.params.id;
  const selectDetails = DetailsData.find((singledata) => singledata.id === id);
  res.send(selectDetails);
});
