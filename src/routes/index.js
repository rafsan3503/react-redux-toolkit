import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/show-books" element={<BooksView />}></Route>
        <Route path="/add-book" element={<AddBook />}></Route>
        <Route path="/edit-book" element={<EditBook />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Index;
