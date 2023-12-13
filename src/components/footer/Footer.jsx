import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src="/images/footer-codial-logo.png" alt="" />
        </div>
        <div className="footer-socials">
          <i className="fa-brands fa-telegram"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <NavLink to={"/"}>Sahifalar</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Bizning jamoa</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Kurslar</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to={"/"}>Bog'lanish</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>https://codial.uz</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>+99899 820 44 32</NavLink>
            </li>
            <span>Website creator Nodirbek Toshpulatov</span>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
