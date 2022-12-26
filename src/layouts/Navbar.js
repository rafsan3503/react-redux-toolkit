import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/show-books" className="nav-link">
        Show Books
      </Link>
      <Link to="/add-book" className="nav-link">
        Edit Book
      </Link>
    </nav>
  );
};

export default Navbar;
