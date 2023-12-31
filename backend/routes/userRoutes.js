import {
	authUser,
	registerUser,
	logoutUser,
	getUserById,
	getUserProfile,
	updateUser,
	getUsers,
	deleteUser,
	updateUserProfile,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();
router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserById).put(updateUser);
export default router;
