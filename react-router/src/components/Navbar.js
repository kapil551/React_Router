import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
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
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
    </nav>
  );
}

export default Navbar;
