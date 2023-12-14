import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    }else{
      setScroll(false)
    }
  };

  // Eventni qo'shish
  window.addEventListener("scroll", handleScroll);
  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="navbar-logo">
          <NavLink to={"/"}>
            <img src="/images/codial-navbar-logo.png" alt="" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Kurslar</NavLink>
          </li>
          <li>
            <NavLink to={"/ourteam"}>Bizning jamoa</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Yangiliklar</NavLink>
          </li>
          <li>
            <NavLink to={"/registration"}>Ro’yxatdan o’tish</NavLink>
          </li>
          <li className="phone">
            <i className="fa-solid fa-phone"></i>
            <NavLink to={"/"}>+99899 820 44 32</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
