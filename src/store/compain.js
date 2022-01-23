import { combineReducers } from "redux";
import loaderReducer from "./reducer/loader";
import FavoritdReducer from "./reducer/addfavorite";
import detailsReducer from "./reducer/moviesDetails";
import changeColorReducer from "./reducer/changeColor";
export default combineReducers({
  loader: loaderReducer,
  Favorite: FavoritdReducer,
  MoviesDetails: detailsReducer,
  ChangeColor: changeColorReducer,
});
