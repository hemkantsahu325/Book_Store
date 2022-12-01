const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order-controller");

router.get("/", orderController.getAllOrder);
router.post("/", orderController.addOrder);


module.exports = router;
