import React from 'react'
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return(
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo"/>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
        <li>
          <a href="/" className="nav-link active">Cars</a>
        </li>
        <li>
          <a href="/" className="nav-link">About-us</a>
        </li>
      </ul>
    </nav>

  );

}
