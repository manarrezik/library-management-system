import BorrowRecord from "../models/BorrowRecord.js";
import Book from "../models/Book.js";




const borrowBook = async(req, res) => {
try{
    const book = await Book.findbyId(req.params.bookId);


if(!book) {
    return res.status(404).json({message:"book not found"});

}
 const existingborrow = await BorrowRecord.findOne({

  user: req.user._id,
      book: book._id,
      status: "borrowed",
 });

if(existingborrow){ 

    return res.status(404).json({message: "book already borrowed"});
}


const record = new BorrowRecord ({
   user: req.user._id,
      book: book._id,

});
await record.save();


 res.status(201).json({ message: "Book borrowed successfully", record });
  } catch (error) {
    res.status(500).json({ message: "Failed to borrow book", error: error.message });
  }
};

const returnBook = async (req, res) => {
  try {
    const record = await BorrowRecord.findById(req.params.id);

    if (!record) return res.status(404).json({ message: "Borrow record not found" });
    if (record.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: "Not authorized to return this book" });
    }
    if (record.status === "returned") {
      return res.status(400).json({ message: "Book already returned" });
    }

    record.status = "returned";
    record.returnDate = Date.now();
    await record.save();

    res.json({ message: "Book returned successfully", record });
  } catch (error) {
    res.status(500).json({ message: "Failed to return book", error: error.message });
  }
};


const getMyBorrows = async (req, res) => {
  try {
    const records = await BorrowRecord.find({ user: req.user._id })
      .populate("book", "title author")
      .sort({ borrowDate: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch history", error: error.message });
  }
};


const getAllBorrows = async (req, res) => {
  try {
    const records = await BorrowRecord.find()
      .populate("user", "name email")
      .populate("book", "title author")
      .sort({ borrowDate: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all history", error: error.message });
  }
};

export { borrowBook, returnBook, getMyBorrows, getAllBorrows };
 
    
