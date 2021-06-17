const { Router } = require("express");
const auth = require("../auth/middleware");
const Product = require("../models").product;
const Designer = require("../models").designer;

const router = new Router();

// get all art work
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Designer],
    });

    res.status(200).send({ products });
  } catch (e) {
    next(e);
  }
});

// git product by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Product id is not a number" });
    }

    const product = await Product.findByPk(id, {
      include: [Designer],
      order: [[Designer, "createdAt", "DESC"]],
    });

    if (product === null) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ product });
  } catch (e) {
    next(e);
  }
});

//to update product
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send("Product doesn't exist");
    }
    const { title, imageurl, tags, description, cost, addedcost } = req.body;
    await product.update({
      title,
      imageurl,
      tags,
      description,
      cost,
      addedcost,
    });

    return res.status(200).send({ product });
  } catch (e) {
    next(e);
  }
});

/// add new product
router.post("/", auth, async (req, res) => {
  try {
    const { title, imageurl, tags, description, cost, addedcost } = req.body;

    if (!title || !imageurl || !tags || !description || !cost || !addedcost) {
      return res
        .status(400)
        .send({ message: "Oops not all fields are filled" });
    }

    const product = await Product.create({
      title,
      imageurl,
      tags,
      description,
      cost,
      addedcost,
      designerId: req.designer.id,
    });
    return res.status(201).send({ message: "new product created", product });
  } catch (e) {
    next(e);
  }
});

module.exports = router;