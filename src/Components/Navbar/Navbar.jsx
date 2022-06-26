import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    // THIS IS JUST FOR DESIGN ONLY

    <nav className='nav'>
      <div className='logo'>GITHUB TYPEHEAD</div>
      <ul>
        <li>Home </li>
        <li>About </li>
        <li>Services </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
