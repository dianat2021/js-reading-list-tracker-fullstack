export const getAllBooks = async (req, res) => {
  res.send("Get all books");
};
export const getBook = async (req, res) => {
  res.send("Get a book");
};
export const createBook = async (req, res) => {
  res.json(req.user);
};
export const deleteBook = async (req, res) => {
  res.send("Delete a book");
};
export const updateBook = async (req, res) => {
  res.send("Update a book");
};
