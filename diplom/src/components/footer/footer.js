import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container py-3">
        <Link className="logo-font font-weight-bold pr-3" to="/">
          counduit
        </Link>
        <span
          className="attribution text-muted font-weight-lighter"
          style={{ fontSize: ".8rem" }}
        >
          © 2020. An interactive learning project from Thinkster. Code licensed
          under MIT.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
