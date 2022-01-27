import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {

  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav
        style={{
          backgroundColor: "lightblue",
          padding: "0.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="featured"> Featured </Link>
        <Link to="new"> New </Link>
      </nav>
      <Outlet />

    </>
  );
}

export default Products;
