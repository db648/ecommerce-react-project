const router = require("express").Router();
const Kids = require("../models/kids_model");
const verify = require("../../verifyToken");

// CREATE Kids
router.post("/", verify, async (req, res) => {
  try {
    const newKids = await Kids.create(req.body);
    res.status(201).send(newKids);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE Product
router.get("/kids/:id", verify, async (req, res) => {
  try {
    const kids = await Kids.findById(req.params.id)
      .lean()
      .exec();
    res.status(201).json(kids);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL Kids
router.get("/", verify, async (req, res) => {
    try {
      const Kidss = await Kids.find()
        .lean()
        .exec();
      res.status(201).send(Kidss);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// search
router.get("/search", verify, async (req, res) => {
  try {
    let term = req.query.s;

    let result = await Kids.find({ $text: { $search: term } })
      .lean()
      .exec();
    return res.status(201).send({ result });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;