import express from "express";
import { registerUser, loginUser, getUserProfile, getUserById, getUsers, updateUser, deleteUser, createUser } from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login" , loginUser);
router.get("profile" , protect , getUserProfile);
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUserById);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);
router.post("/", protect, admin, createUser);


export default router;
