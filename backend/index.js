import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/ProductRoute.js';
import connectDB from './libs/db.js';
import Orderrouter from './routes/OrderRoute.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/products', router);
app.use('/api/order',Orderrouter);
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
