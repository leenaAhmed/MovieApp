import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import axiosInstance from "../../services/axios";
import CardDetials from "../moveCardDeials/index";
import { useSelector, useDispatch } from "react-redux";
import changeMoviesDetails from "./../../../store/action/moviesDetails";

function MoviesDetails() {
  const params = useParams();
  const loader = useSelector((state) => state.loader.loader);
  const movie = useSelector((state) => state.MoviesDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeMoviesDetails(params.id));
  }, []);

  return (
    <div className="">
      {loader === true ? (
        <div className="moveCard">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="moveCard">
          <CardDetials
            title={movie.original_title}
            id={movie.id}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            tagline={movie.status}
            srcImge={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        </div>
      )}
    </div>
  );
}

export default MoviesDetails;
