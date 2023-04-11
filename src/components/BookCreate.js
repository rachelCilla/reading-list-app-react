import React, { useState, useContext } from "react";
import BooksContext from "../context/Books";

export default function BookCreate() {
  const [title, setTile] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (e) => {
    setTile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTile("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Create Book
        </button>
      </form>
    </div>
  );
}
