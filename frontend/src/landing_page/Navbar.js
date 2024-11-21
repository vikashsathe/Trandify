import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mb-5">
      <nav
        class="navbar navbar-expand-lg"
        style={{
          top: "0",
          width: "100%",
          zIndex: "10",
          position: "fixed",
          padding: "12px",
          backgroundColor: " #fff",
          boxShadow: "2px 1px 2px #eee",
          boxSizing: "border-box",
        }}
      >
        <div class="container mx-5">
          <Link class="navbar-brand mx-5" to="/">
            <img src="media/images/logo.svg" alt="" style={{ width: "25%" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav  mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link " ari-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " ari-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " ari-current="page" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " ari-current="page" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " ari-current="page" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
