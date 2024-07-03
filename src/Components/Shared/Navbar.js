import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logoContainer">
        <img className="logo" src="quby-knife.gif" alt="Quby holding a knife" />
        <Link to="/">Home</Link>
      </div>

      <div className="smallerContainer">
        <div>
          <Link to="/Places">Places</Link>
          <Link to="/auth">Sign Up</Link>
          <Link to="/new"> New Place </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
