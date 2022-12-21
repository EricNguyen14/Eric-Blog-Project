import { ACT_GET_ALL_CATEGORY } from "./action";

const initialState = {
  categories: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
}
export default reducer;
