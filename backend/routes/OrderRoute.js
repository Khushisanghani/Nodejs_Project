import express from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../controllers/OrderController.js";
const Orderrouter = express.Router();
Orderrouter.post("/",createOrder);
Orderrouter.get('/', getAllOrders);
Orderrouter.get('/:id',getOrderById);
Orderrouter.put('/:id',updateOrder);
Orderrouter.delete('/:id',deleteOrder);
export default Orderrouter;
