import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../services/axios";
import { useSelector, useDispatch } from "react-redux";
import addToFavoriteMovies from "../../store/action/addFavorite";
import { changeIconColor } from "../../store/action/changecolor";

const Icon = (props) => {
  const [movie, SetMovie] = useState({});
  const [iconColor, setIconColor] = useState("text-gray");
  const FavoriteMovies = useSelector((state) => state.Favorite.Favorite);
  const dispatch = useDispatch();
  let flag = 0;
  useEffect(() => {
    for (let i = 0; i < FavoriteMovies.length; i++) {
      if (props.id === FavoriteMovies[i].id) {
        flag = 1;
      }
    }
    if (flag === 1) {
      setIconColor("text-danger");
    }
  }, []);
  const HandleClick = (movieId) => {
    dispatch(changeIconColor("text-danger"));
    axiosInstance
      .get(`movie/${props.id}?api_key=6354f454eb60c40b4787fe8e3cb0fbf0`)
      .then((res) => {
        SetMovie(res.data);

        for (let i = 0; i < FavoriteMovies.length; i++) {
          if (res.data.id === FavoriteMovies[i].id) {
            flag = 1;
          }
        }
        if (flag === 0) {
          dispatch(addToFavoriteMovies(res.data));
          setIconColor("text-danger");
        }
        // console.log(FavoriteMovies);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const icons = {
    fontSize: "23px"
  };
  return (
    <FontAwesomeIcon
      icon={faHeart}
      name={props.id}
      style={icons}
      className={props.style ? props.style : iconColor}
      onClick={() => HandleClick(props.id)}
    />
  );
};

export default Icon;
