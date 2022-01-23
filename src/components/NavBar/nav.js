import React from "react";
import FavMovieIcon from "./favNavIcon";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg   naveStyle fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Movies
                </Link>
              </li>
              <li className="nav-item text-primary">
                <Link to="/FavoriteMovies" className="nav-link ">
                  Favorite Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link ">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="me-4">
            <FavMovieIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
