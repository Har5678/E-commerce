import express from 'express'
import cors from 'cors'
import "dotenv/config"
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//App config 

const app=express();
const port=process.env.PORT || 4000

//Middlewares

app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();

//api endpoints

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.listen(port,()=>console.log("server started on PORT : " + port))