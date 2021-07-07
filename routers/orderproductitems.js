const { Router } = require("express");
const auth = require("../auth/middleware");
const Product = require("../models").product;
const Order = require("../models").order;
const Order_product_items = require("../models").order_product_item;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const order_product_items = await Order_product_items.findAll({
      include: [Product],
    });
    console.log(order_product_items);
    res.status(200).send({ message: "ok", order_product_items });
  } catch (e) {
    next(e);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { size, color, type, quantity, productId } = req.body;

    const addOrderId = await Order.create({
      userId: req.user.id,
    });

    console.log(size, color, type, quantity, productId);
    if (!size || !color || !type || !quantity || !productId) {
      return res
        .status(400)
        .send({ message: "Oops not all fields are filled" });
    }

    const newOrder = await Order_product_items.create({
      orderId: parseInt(addOrderId.id),
      productId,
      quantity,
      color,
      type,
      size,
    });
    const neworders = await Order_product_items.findAll({
      include: [Product],
    });
    return res.status(201).send({
      message: "new order-product-items created",
      neworders,
    });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
