const initial = {
  Favorite: [],
};
export default function FavoritdReducer(state = initial, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        Favorite: [...state.Favorite, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        Favorite: state.Favorite.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
}
