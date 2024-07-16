import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
  return (
    <aside className={props.nav ? "side-drawer" : ""}>{props.children}</aside>
  );
};

export default SideNav;
