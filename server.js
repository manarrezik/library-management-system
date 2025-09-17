import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import borrowRoutes from "./routes/borrowRoutes.js";


dotenv.config ();
connectDB();
 const app = express();

 app.use(express.json());

 app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/borrows", borrowRoutes);


 app.get("/", (req, res) => {
  res.send("Library Management System API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
