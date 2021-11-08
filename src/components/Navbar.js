import React from "react";
import { authed, logout } from "../httpServices/user";

const NavBar = () => {
  const onLogout = () => {
    logout();
    window.location.reload();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Shopping Brand
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/categories">
              Categories
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            {authed() ? (
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => onLogout()}
              >
                Logout
              </div>
            ) : (
              <a href="/login" className="nav-link">
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
