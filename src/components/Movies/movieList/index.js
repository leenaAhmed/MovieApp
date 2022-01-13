import React, { useEffect, useState } from "react";

import Card from "../moveCard/card";
import InstancsAxios from "../../services/axios";
function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [serchitems, setSearch] = useState("");

  const selectedPage = (page) => {
    InstancsAxios.get(
      `movie/popular?api_key=6354f454eb60c40b4787fe8e3cb0fbf0&page=${currentPage}`
    )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    selectedPage(1);
  }, []);

  useEffect(() => {
    InstancsAxios.get(
      `search/movie?api_key=6354f454eb60c40b4787fe8e3cb0fbf0&query=${serchitems}`
    )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [serchitems]);

  const handelPrevious = () => {
    if (currentPage <= 0) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
      selectedPage(currentPage - 1);
    }
    console.log(currentPage);
  };
  const handelNext = () => {
    setCurrentPage(currentPage + 1);
    selectedPage(currentPage + 1);

    console.log(currentPage);
  };
  return (
    <>
      <div className="container">
        <h4 className="text-center my-4">MoviesList</h4>
        <form className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            value={serchitems}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-lg-3 mt-4">
                <Card
                  title={movie.original_title}
                  id={movie.id}
                  srcImge={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between mt-5 mb-5">
          <button
            className="btn btn-primary bt-lg"
            onClick={() => handelPrevious()}
          >
            Previouse
          </button>
          <button className="btn btn-primary" onClick={() => handelNext()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default MoviesList;
