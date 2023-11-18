//import dumy data
import products from "./data/products.js";
//setup express server
import express from "express";
//set up port
import dotenv from "dotenv";
//for DB connection
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5001;
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);

//DB connection
connectDB();

const app = express();

app.get("/api/products", (req, res) => {
	res.json(products);
});
app.get("/api/products/:id", (req, res) => {
	const product = products.find((p) => (p._id = req.params.id));
	res.json(product);
});
app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(port, () => console.log(`server running on port ${port}`));
