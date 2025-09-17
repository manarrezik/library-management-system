import express from "express";
import {
  borrowBook,
  returnBook,
  getMyBorrows,
  getAllBorrows,
} from "../controllers/borrowController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:bookId", protect, borrowBook);
router.put("/:id/return", protect, returnBook);
router.get("/my", protect, getMyBorrows);
router.get("/", protect, admin, getAllBorrows);

export default router;
