const { model } = require("mongoose");
const { OrdersSchema } = require("../schema/OrderSchema");

const OrderModel = new model("order", OrdersSchema);

module.exports = { OrderModel };
