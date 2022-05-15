const router = require("express").Router();
const Men = require("../models/men_model");
const verify = require("../../verifyToken");

// ***********************************************************************************************************************
// CREATE Men
// ***********************************************************************************************************************

router.post("/", verify, async (req, res) => {
  try {
    const newMen = await Men.create(req.body);
    res.status(201).send(newMen);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET SINGLE Product
// ***********************************************************************************************************************

router.get("/men/:id", verify, async (req, res) => {
  try {
    const men = await Men.findById(req.params.id)
      .lean()
      .exec();
    res.status(201).json(men);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ***********************************************************************************************************************
// GET ALL Men
// ***********************************************************************************************************************

router.get("/", verify, async (req, res) => {
    try {
      const Mens = await Men.find()
        .lean()
        .exec();
      res.status(201).send(Mens);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// ***********************************************************************************************************************
//--------search-------------------------------------------------------------------------------------------------------------------------------
router.get("/search", verify, async (req, res) => {
  try {
    let term = req.query.s;

    let result = await Men.find({ $text: { $search: term } })
      .lean()
      .exec();
    return res.status(201).send({ result });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;