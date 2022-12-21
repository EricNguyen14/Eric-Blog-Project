import {
  ACT_GET_LATEST_POST,
  ACT_GET_GENERAL_POST,
  ACT_GET_POPULAR_POST,
  ACT_GET_SEARCH_POST,
  ACT_GET_DETAIL_POST,
  ACT_GET_RELATED_POSTS,
} from "./action.js";

const initialState = {
  listPostGeneral: [],
  listPostSearch: [],
  page: 1,
  totalPage: 1,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_GET_LATEST_POST:
      return { ...state, listPostLastest: action.payload.posts };
    case ACT_GET_POPULAR_POST:
      return { ...state, listPostPopular: action.payload.posts };

    case ACT_GET_GENERAL_POST:
      return {
        ...state,
        listPostGeneral: [...state.listPostGeneral, ...action.payload.posts],
        page: action.payload.page,
      };
    case ACT_GET_SEARCH_POST:
      let newList = [];
      if (action.payload.page === 1) {
        newList = [...action.payload.posts];
      } else {
        newList = [...state.listPostSearch, ...action.payload.posts];
      }
      return {
        ...state,

        listPostSearch: newList,
        page: action.payload.page,
        totalPage: action.payload.totalPage,
      };

    case ACT_GET_DETAIL_POST:
      return { ...state, listPostDetail: action.payload.posts };
    case ACT_GET_RELATED_POSTS:
      return { ...state, listPostRelated: action.payload.posts };

    default:
      return state;
  }
}
export default reducer;
