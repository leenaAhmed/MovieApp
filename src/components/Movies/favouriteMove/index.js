import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { removeFavoriteMovies } from "../../../store/action/addFavorite";
import { changeIconColor } from "../../../store/action/changecolor";
//  import Card from "../moveCard/card";
function FavoritdMovies() {
  const Favorite = useSelector((state) => state.Favorite.Favorite);
  const dispatch = useDispatch();

  const removeMovie = (movieId) => {
    console.log("Delete", dispatch(removeFavoriteMovies(movieId)));

    dispatch(changeIconColor("text-gray"));
  };
  return (
    <div className="container mt-3">
      <div className="row mt-5" >
        <h2 className="mt-5 text-center"> My Favorite Movies</h2>

        {Favorite.map((movie) => {
          return (
            <div className="col-lg-3 mt-4" key={movie.id}>
              <div className="col-lg-4">
                <div
                  className="card"
                  style={{ width: "18rem", height: "22rem" }}
                >
                  <Link to={`/movies-details/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="card-img-top"
                      alt={movie.title}
                    />
                  </Link>
                  <div className="card-body d-flex justify-content-between">
                    <Link
                      to={`/movies-details/${movie.id}`}
                      className="card-text"
                    >
                      {movie.title}
                    </Link>
                    <FontAwesomeIcon
                      icon={faHeart}
                      name={movie.id}
                      className="text-danger fs-2"
                      onClick={() => dispatch(removeFavoriteMovies(movie))}
                    />
                  </div>
                </div>
              </div>
              {/*               
              <Card
                title={movie.original_title}
                id={movie.id}
                srcImge={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                icon={<FillIcom onClick={() => removeMovie(movie.id)} />}
              />*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoritdMovies;
