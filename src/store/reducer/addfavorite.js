const initial = {
  Favorite: []
};

export default function FavoritdReducer(state = initial, action) {
  var moc = state.Favorite.filter((movie) => {
    return movie.id !== action.payload.id;
  });
  // console.log(" filter", moc);
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        Favorite: [...state.Favorite, action.payload]
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        Favorite: moc
      };
    default:
      return state;
  }
}
