import { ACT_GET_MENU } from "./action";

const initialState = {
  menu: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_MENU:
      return { ...state, menu: action.payload.menu };

    default:
      return state;
  }
}
export default reducer;
