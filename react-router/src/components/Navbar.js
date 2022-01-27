import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently active/selected.
  let activeStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.2rem"
  };

  const navLinkStyles = ({ isActive }) => {

    // console.log("isActive:", isActive);
    
    return (
        isActive ? activeStyle : undefined
    );
  }
  
  return (
    <nav
      style={{
        backgroundColor: "lightgray",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <NavLink
        to="/"
        style={navLinkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={navLinkStyles}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
