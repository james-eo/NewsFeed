import React from "react";
import Logo from "./Logo";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <div
          className="navbar-brand d-flex align-items-center"
          onClick={() => setCategory("general")}
          style={{ cursor: "pointer" }}
        >
          <Logo onClick={() => setCategory("general")} />
          {/* <span className="text-white fs-4 fw-bold">NewsBreak</span> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {[
              "technology",
              "business",
              "health",
              "sports",
              "entertainment",
            ].map((category) => (
              <a
                key={category}
                className="nav-link text-white"
                onClick={() => setCategory(category)}
                style={{ cursor: "pointer" }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
