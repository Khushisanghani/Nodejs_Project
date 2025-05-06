import Order from "../models/Order.js";
export const createOrder = async (req,res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('items.productId');
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const getOrderById = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate('items.productId');
      if (!order) return res.status(404).json({ message: "Not found" });
      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const updateOrder = async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedOrder) return res.status(404).json({ message: "Not found" });
      res.json(updatedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  export const deleteOrder = async (req, res) => {
    try {
      const deleted = await Order.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Not found" });
      res.json({ message: "Order deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };