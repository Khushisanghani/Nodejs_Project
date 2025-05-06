import mongoose from "mongoose";
const CartItem = new mongoose.Schema({
    productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    discount: {
        type:Number
    }
})
export default CartItem;