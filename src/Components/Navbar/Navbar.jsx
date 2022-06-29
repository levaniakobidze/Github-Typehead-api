import React from "react";
import "./Navbar.css";
import { AiFillGithub } from "react-icons/ai";

function Navbar() {
  return (
    // THIS IS JUST FOR DESIGN ONLY

    <nav className='nav'>
      <div className='logo'>
        <AiFillGithub className='logo-icon' />
        GITHUB TYPEHEAD
      </div>
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
