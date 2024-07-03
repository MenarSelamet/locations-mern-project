import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import "./Navbar.css";
import NavLinks from "../NavLinks/NavLinks";

const MainNavigation = () => {
  return (
    <>
      <SideNav>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideNav>
      <Header>
        <button className="main-navigation__menu-btn">
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
