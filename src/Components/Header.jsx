// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Kickstart My React Journey</h1>
      <img src="/logo192.png" alt="react logo" />
      <nav>
        <Link to="/">Examples</Link>
        <Link to="/quiz">Quiz</Link>
      </nav>
    </header>
  );
}

export default Header;
