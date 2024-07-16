import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import "./Navbar.css";
import "../NavLinks/NavLinks.css";

const MainNavigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <SideNav nav={nav}>
        <nav className="main-navigation__drawer-nav">
          <ul className="nav-links">
            <li onClick={() => setNav(false)}>
              <NavLink to="/"> All Users </NavLink>
            </li>
            <li onClick={() => setNav(false)}>
              <NavLink to="/places"> My Places</NavLink>
            </li>
            <li onClick={() => setNav(false)}>
              <NavLink to="/new"> Add Place</NavLink>
            </li>
            <li onClick={() => setNav(false)}>
              <NavLink to="/auth"> Authenticate</NavLink>
            </li>
          </ul>
        </nav>
      </SideNav>
      <Header>
        <button onClick={handleNav} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Locations</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Header>
    </>
  );
};

export default MainNavigation;
