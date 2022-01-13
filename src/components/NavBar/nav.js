import React, { useState, useEffect } from "react";
import InstancsAxios from "../services/axios";

import { Link } from "react-router-dom";
const Navbar = () => {
  // const handleFetch = () => {
  //   InstancsAxios.get(`/popular?api_key=6354f454eb60c40b4787fe8e3cb0fbf0`, {
  //     params: {
  //       query: serchitems,
  //     },
  //   })
  //     .then((res) => {
  //       setMovies(res.data.results);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   InstancsAxios.get(`/popular?api_key=6354f454eb60c40b4787fe8e3cb0fbf0`, {
  //     params: {
  //       query: serchitems,
  //     },
  //   })
  //     .then((res) => {
  //       setMovies(res.data.results);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [serchitems]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
