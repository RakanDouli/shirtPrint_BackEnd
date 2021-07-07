const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Designer = require("../models/").designer;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/user/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/user/signup", async (req, res) => {
  const { email, password, name, adress } = req.body;

  if (!email || !password || !name || !adress) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      adress,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/user/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});
// //////////////////////// designers login and sign up

router.post("/designer/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const designer = await Designer.findOne({ where: { email } });

    if (!designer || !bcrypt.compareSync(password, designer.password)) {
      return res.status(400).send({
        message: "Designer with that email not found or password incorrect",
      });
    }

    delete designer.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ designerId: designer.id });

    return res.status(200).send({ token, ...designer.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/designer/signup", async (req, res) => {
  const { email, password, name, adress, bankaccount } = req.body;
  if (!email || !password || !name || !adress || !bankaccount) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newDesigner = await Designer.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      adress,
      bankaccount,
    });

    delete newDesigner.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ designerId: newDesigner.id });

    res.status(201).json({ token, ...newDesigner.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/designer/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.designer.dataValues["password"];
  res.status(200).send({ ...req.designer.dataValues });
});
//
module.exports = router;
