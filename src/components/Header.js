import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="topnav">
      <a className="logo" href="/">
        Star Wars
      </a>
      <div className="search-container">
        <form>
          <Link smooth to="#form">
            Add Movies
          </Link>
          <input type="text" placeholder="Search..." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
