import express from "express";

import {
  addBook,
  updateBook,
  deleteBook,
  getBooks,
  getBookByTitle,
} from "../controllers/bookController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/", getBooks);
router.get("/:title", getBookByTitle);


router.post("/", protect, admin, addBook);
router.put("/:id", protect, admin, updateBook);
router.delete("/:id", protect, admin, deleteBook);

export default router;
