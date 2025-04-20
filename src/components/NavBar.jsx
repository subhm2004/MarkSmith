import React from "react";
import GitHub from "../icons/github.svg";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="navbar">
      <h3 className="title">
      MarkSmith
      </h3>
      <div className="nav-right">
        <ThemeToggle />
        <img
          onClick={() =>
            window.open("https://github.com/subhm2004/MarkSmith")
          }
          className="github"
          src={GitHub}
          alt=""
        />
      </div>
    </nav>
  );
}

export default NavBar;
