import React, { useEffect, useState } from "react";

import Card from "../moveCard/card";
import Favicon from "../../icon/favicon";
import { useSelector, useDispatch } from "react-redux";

import getMoviesList from "./../../../store/action/movieList";
import "./style.css";
function MoviesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const loader = useSelector((state) => state.loader.loader);
  const { movies } = useSelector((state) => state.MoviesList);

  const dispatch = useDispatch();
  console.log(useSelector((state) => state.MoviesList));
  const selectedPage = (page) => {
    dispatch(getMoviesList(page));
  };

  useEffect(() => {
    selectedPage(currentPage);
  }, [currentPage]);

  const handelPrevious = () => {
    if (currentPage === 0) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
    // console.log(currentPage);
  };
  const handelNext = () => {
    setCurrentPage(currentPage + 1);
    // console.log(currentPage);
  };
  return (
    <>
      <div className="container">
        <h4 className="text-center my-4">MoviesList</h4>

        <div className="row">
          {loader && (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-lg-3 col-md-6 col-sm-6 mt-4">
                <Card
                  title={movie.original_title}
                  id={movie.id}
                  rate={movie.vote_average}
                  srcImge={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  icon={<Favicon id={movie.id} />}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between mt-5 mb-5">
          <button
            className="btn butnpages bt-lg"
            onClick={() => handelPrevious()}
          >
            page {currentPage}
          </button>
          <button className="btn butnpages" onClick={() => handelNext()}>
            page {currentPage + 1}
          </button>
        </div>
      </div>
    </>
  );
}

export default MoviesList;
