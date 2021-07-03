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
    const { size, color, type, quantity, productId, orderId } = req.body;
    // const userId = req.user.id;
    // const newOrder = await Order.create({ userId });
    // const orderId = await Order.findByPk(userId);
    console.log(orderId);
    if (!size || !color || !type || !quantity || !productId || !orderId) {
      return res
        .status(400)
        .send({ message: "Oops not all fields are filled" });
    }

    const order_product_items = await Order_product_items.create({
      size,
      color,
      type,
      quantity,
      productId,
      orderId,
    });
    return res.status(201).send({
      message: "new order-product-items created",
      ...order_product_items,
    });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
