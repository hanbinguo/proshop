//import dumy data
import products from "./data/products.js";
//setup express server
import express from "express";
//set up port
import dotenv from "dotenv";
//for DB connection
import connectDB from "./config/db.js";
//for product routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const port = process.env.PORT || 5001;
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);

//DB connection
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(port, () => console.log(`server running on port ${port}`));
