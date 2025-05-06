import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  stock: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    enum:['mobile','cloths','stationery'],
    required: true },
}, { timestamps: true });

const Product =  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;