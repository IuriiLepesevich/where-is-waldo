import React from "react";
import "../../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="leaderboard">
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
