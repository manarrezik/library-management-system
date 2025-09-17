import Book from "../models/Book.js"

//to add new book
const addBook = async (req, res) => {
    const {title, author, publishedYear, copiesAvailable} = req.body;

   
    const book = new Book({ title, author, publishedYear, copiesAvailable });
  const createdBook = await book.save();
  res.status(201).json(createdBook);
}

//to get all books
const getBooks = async (req, res) => {
    const books = await Book.find();
  res.json(books);

}

//to update a specific book
const updateBook = async (req, res) => {

   const book = await Book.findById(req.params.id);

    if (book) {
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.publishedYear = req.body.publishedYear || book.publishedYear;
    book.copiesAvailable = req.body.copiesAvailable || book.copiesAvailable;
  const updatedbook = await book.save();
  res.json(updatedbook);}

  else {
    res.status(404).json({message: "book not found"});
  }
}


//to delete a book

const deleteBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
     if (book) {
        await book.deleteOne();
        res.json({message: "the book is deleted"})
     }
     else {
        res.status(404).json ({message: "book not found"})
     }


}
const getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const book = await Book.findOne({ title: { $regex: `^${title}$`, $options: "i" } });

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch book", error: error.message });
  }
};


export { getBooks, addBook, updateBook, deleteBook , getBookByTitle};