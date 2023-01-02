import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="logo">Junior</div>
      <nav className="item">
        <ul className="ul">
          <Link to="/">Home</Link>
          <Link to="contact">Contact</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
