import React, { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTile] = useState("");

  const handleChange = (e) => {
    setTile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
