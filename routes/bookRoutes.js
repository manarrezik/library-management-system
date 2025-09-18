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
router.delete("/:id", protect, admin, deleteBook);


router.post("/", protect, admin, addBook);
router.put("/:id", protect, admin, updateBook);


export default router;
