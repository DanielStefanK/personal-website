import { Link } from "gatsby";
import React, { useState } from "react";

import logo from "../assests/images/logo.png";

const NavHeader = () => {
  const [isBurgerActive, setBurgerActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="daniel-stefan.dev logo" width="28" height="28" />
        </Link>

        <button
          onClick={() => setBurgerActive(!isBurgerActive)}
          className={
            isBurgerActive ? "navbar-burger is-active" : "navbar-burger"
          }
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        className={
          isBurgerActive
            ? "navbar-menu navbar-dropdown is-active"
            : "navbar-dropdown navbar-menu"
        }
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <Link
                to="/contact"
                className="button is-primary is-rounded is-outlined"
              >
                <strong>Contact</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
