import mongoose from "mongoose";
import CartItem from "./CartItem.js";
const OrderSchema = new mongoose.Schema({
    items:[CartItem],
    totalAmount:{
        type:Number,
        required:true
    },
    payment:{
        type:String,
        enum:['cash','card','qr'],
        required:true
    },
    date:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const Order = mongoose.model('order',OrderSchema);
export default Order;