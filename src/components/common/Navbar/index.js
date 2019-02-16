import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./index.scss";
import postLogo from "@/assets/images/post.png";

const Navbar = () => (
  <nav className="navbar-wrapper">
    <section className="navbar-start">
      <Link
        className="navbar-start__item pointer-cursor no-highlight router-link"
        to="/"
      >
        <img alt="logo" className="navbar-start__item__logo" src={postLogo} />
        Post Board
      </Link>
    </section>
    <section className="navbar-end">
      <Link
        className="navbar-end__item pointer-cursor no-highlight router-link"
        to="/about"
      >
        About
      </Link>
    </section>
  </nav>
);

export default withRouter(Navbar);
