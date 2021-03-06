const router = require("express").Router();
const Products = require("../models/products_model");
const verify = require("../../verifyToken");

// CREATE Products
router.post("", async (req, res) => {
  try {
    const newProducts = await Products.create(req.body);
    res.status(201).send(newProducts);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET SINGLE Product
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id)
      .lean()
      .exec();
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET ALL Products
router.get("/", async (req, res) => {
    try {
      const Productss = await Products.find()
        .lean()
        .exec();
      res.status(201).send(Productss);
    } catch (err) {
      res.status(500).send(err);
    }
  });

 // Search
router.get("/search", async (req, res) => {
  try {
    let term = req.query.s;
    let result = await Products.find({ $text: { $search: term } })
      .lean()
      .exec();
    return res.status(201).send({ result });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;