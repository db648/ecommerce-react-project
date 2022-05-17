const express = require("express");
const router = express.Router();
const User = require("../models/user_model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    let user1 = await User.findOne({ email: req.body.email });
    //if user is found send error
    if (user1) {
      console.log("found");
      return res.status(201).send({ status: false });
    }
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, "products").toString(),
    });
    return res.status(201).send(user);
  } catch (err) {
    return res.status(501).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(201).send({ status: "false" });
    }

    const bytes = CryptoJS.AES.decrypt(user.password, "products");
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(201).send({ status: "false" });
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin : user.isAdmin },
      "products"
    );

    const { password, ...info } = user._doc;

    res.status(201).send({ ...info, accessToken });
  } catch (err) {
    console.log("catch");
    return res.status(500).send(err);
  }
});

module.exports = router;