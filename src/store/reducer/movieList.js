let initialState = {
  movies: [],
  text: ""
};
export default function moviesListReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return {
        movies: action.payload
      };
    case "SET_MOVIES_LIST":
      return {
        movies: action.payload
      };
    case "SEARCH_MOVIE":
      return {
        text: action.payload
      };

    default:
      return state;
  }
}

// console.log(initialState);
