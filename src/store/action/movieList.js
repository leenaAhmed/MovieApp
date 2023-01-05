import axiosInstance from "../../components/services/axios";

export default function getMoviesList(page) {
  return (dispatch) => {
    axiosInstance
      .get(
        `/movie/popular?api_key=6354f454eb60c40b4787fe8e3cb0fbf0&page=${page}`
      )
      .then((res) =>
        dispatch({ type: "GET_MOVIE_LIST", payload: res.data.results })
      )
      .catch((err) => console.log(err));
  };
}
// export function setMoviesLists(serchitems) {
//   return (dispatch) => {
//     axiosInstance
//       .get(
//         `search/movie/popular?api_key=6354f454eb60c40b4787fe8e3cb0fbf0&query=${serchitems}`
//       )
//       .then((res) => {
//         dispatch({ type: "SET_MOVIES_LIST", payload: res.data.results });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }

export const getSearchMovie = (serchitems) => {
  console.log(serchitems);
  return (dispatch) => {
    dispatch({
      type: "SEARCH_MOVIE",
      payload: serchitems
    });
  };
};
