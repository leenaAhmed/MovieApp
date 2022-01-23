const initial = {
  Icon: "text-gray",
};

export default function changeColorReducer(state = initial, action) {
  switch (action.type) {
    case "SET_COlOR":
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
}
