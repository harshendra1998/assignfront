import React from "react";
import { Routes, Outlet, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <>
      <nav className="flexrow">
            <NavLink className={'flexfull navtab'} activeClassName={'navactive'} to="/">Home</NavLink>
            <NavLink className={'flexfull navtab'} activeClassName={'navactive'} to="/about">About</NavLink>
            <NavLink className={'flexfull navtab'} activeClassName={'navactive'} to="/contact">Contact</NavLink>
      </nav>

      <Outlet />
    </>

    </>
  );
}
