import React from "react";
import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/Books";

export default function BookList() {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}
