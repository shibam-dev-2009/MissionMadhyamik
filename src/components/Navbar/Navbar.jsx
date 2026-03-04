import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import assets from "../../assets/assets"
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <Link to={"/"}><img src={assets.Logo} /></Link>
            Mission Madhyamik Foundation
            </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/archive">Archive</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>

        </ul>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`drawer ${open ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/archive" onClick={() => setOpen(false)}>
              Archive
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>

        </ul>
      </div>
    </>
  );
}