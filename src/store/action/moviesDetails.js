import axiosInstance from "../../components/services/axios";

export default function changeMoviesDetails(_id) {
  return (dispatch) => {
    axiosInstance
      .get(`movie/${_id}?api_key=6354f454eb60c40b4787fe8e3cb0fbf0`)
      .then((res) => dispatch({ type: "SET_DETAILS", payload: res.data }))
      .catch((err) => console.log(err));
  };
}
