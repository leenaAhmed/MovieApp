export default function addToFavoriteMovies(data) {
  return {
    type: "ADD_FAVORITE",
    payload: data,
  };
}

export function removeFavoriteMovies(data) {
  return {
    type: " REMOVE_FAVORITE",
    payload: data,
  };
}
