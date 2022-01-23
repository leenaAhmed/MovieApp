import FillIcom from "../icon/fillIcom";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";
function FavMovieIcon(Props) {
  return (
    <div id="cart-icon">
      <Link to="/FavoriteMovies">
        <FillIcom />
        <span className="badge badge-danger">0</span>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  // return {
  //   totalFavorite: state.Favorite.reduce(
  //     (total, item) => total + parseInt(item.counters),
  //     0
  //   ),
  // };
};
export default connect(mapStateToProps)(FavMovieIcon);
