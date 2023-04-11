import { createContext, useState } from "react";
import axios from "axios";

//CONTEXT OBJ
const BooksContext = createContext();

//PROVIDER COMPONENT
function Provider({ children }) {
  //STATE
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  // EDIT BOOK by id - PUT
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  // DELETE book by id
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  // CREATE a Book- make a POSTreq to json server with "title", get the response (book + id), and add it to books state
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
