import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/Books";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button is-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
