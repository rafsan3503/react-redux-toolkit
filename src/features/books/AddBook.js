import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books");
  };
  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            required
            value={title}
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            name="author"
            id="author"
            required
            value={author}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
