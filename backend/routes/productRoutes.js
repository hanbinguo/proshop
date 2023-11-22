//this is a file where we put all of our product routes and inject them into server.js
import express from "express";
const router = express.Router();

//asyncHandler

import {
	getProduct,
	getProductById,
} from "../controllers/productController.js";
router.route("/").get(getProduct);
router.route("/:id").get(getProductById);

export default router;
