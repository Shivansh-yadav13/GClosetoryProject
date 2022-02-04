import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>Casetory</ul>
      <div>
        <ul>
          <NavLink to="/" activeclassname="nav-selected"><li>Home</li></NavLink>
          <li><NavLink to="/shop" activeclassname="nav-selected">Shop</NavLink></li>
          <li><NavLink to="/about-us" activeclassname="nav-selected">About Us</NavLink></li>
        </ul>
      </div>
      <div>
        <ul>User</ul>
      </div>
    </nav>
  );
};

export default Navbar;
