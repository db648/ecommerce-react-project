const router = require("express").Router();
const Women = require("../models/women_model");
const verify = require("../../verifyToken");

// CREATE women
router.post("/", verify, async (req, res) => {
  try {
    const newwomen = await Women.create(req.body);
    res.status(201).send(newwomen);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE Product
router.get("/women/:id", verify, async (req, res) => {
  try {
    const women = await Women.findById(req.params.id)
      .lean()
      .exec();
    res.status(201).json(women);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL women
router.get("/", verify, async (req, res) => {
    try {
      const womens = await Women.find()
        .lean()
        .exec();
      res.status(201).send(womens);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Search
router.get("/search", verify, async (req, res) => {
  try {
    let term = req.query.s;

    let result = await Women.find({ $text: { $search: term } })
      .lean()
      .exec();
    return res.status(201).send({ result });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;