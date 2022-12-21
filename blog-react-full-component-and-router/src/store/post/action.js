import { mappingPost } from "../../helpers";
import { postService } from "../../services/post";

export const ACT_GET_LATEST_POST = "ACT_GET_LATEST_POST";
export const ACT_GET_POPULAR_POST = "ACT_GET_POPULAR_POST";
export const ACT_GET_GENERAL_POST = "ACT_GET_GENERAL_POST";
export const ACT_GET_SEARCH_POST = "ACT_GET_SEARCH_POST";
export const ACT_GET_DETAIL_POST = "ACT_GET_DETAIL_POST";
export const ACT_GET_COMMENT = "ACT_GET_COMMENT";
export const ACT_GET_RELATED_POSTS = "ACT_GET_RELATED_POSTS";

export function actGetLastestPost(posts) {
  return {
    type: ACT_GET_LATEST_POST,
    payload: {
      posts,
    },
  };
}
export function actGetPopularPost(posts) {
  return {
    type: ACT_GET_POPULAR_POST,
    payload: {
      posts,
    },
  };
}
export function actGetGeneralPost(posts, page) {
  return {
    type: ACT_GET_GENERAL_POST,
    payload: {
      posts,
      page,
    },
  };
}
export function actGetSearchPost(posts, page, totalPage) {
  return {
    type: ACT_GET_SEARCH_POST,
    payload: {
      posts,
      page,
      totalPage,
    },
  };
}

export function actGetDetailPost(posts) {
  return {
    type: ACT_GET_DETAIL_POST,
    payload: {
      posts,
    },
  };
}
export function actGetComment(posts) {
  return {
    type: ACT_GET_COMMENT,
    payload: {
      posts,
    },
  };
}
export function actGetRelatedPosts(posts) {
  return {
    type: ACT_GET_RELATED_POSTS,
    payload: {
      posts,
    },
  };
}
export function actGetLatestPostAsync() {
  return async (dispatch) => {
    const response = await postService.getLastest();
    const posts = response.data.map(mappingPost);
    dispatch(actGetLastestPost(posts));
  };
}

export function actGetPopularPostAsync() {
  return async (dispatch) => {
    const response = await postService.getPopular();
    const posts = response.data.map(mappingPost);
    dispatch(actGetPopularPost(posts));
  };
}

export function actGetGeneralPostAsync(page) {
  return async (dispatch) => {
    const response = await postService.getGeneral(page);
    const posts = response.data.map(mappingPost);
    dispatch(actGetGeneralPost(posts, page));
  };
}
export function actGetSearchPostAsync(searchValue, page) {
  return async (dispatch) => {
    const response = await postService.searchPost(searchValue, page);
    const totalPage = response.headers["x-wp-totalpages"];
    const posts = response.data.map(mappingPost);
    dispatch(actGetSearchPost(posts, page, totalPage));
  };
}
export function actGetDetailPostAsync(slug) {
  return async (dispatch) => {
    const response = await postService.detailPost(slug);
    const post = mappingPost(response.data[0]);
    dispatch(actGetDetailPost(post));
    const exclude = post.id;
    const relatedResponse = await postService.relatedPost(
      post?.authorId,
      exclude
    );
    const relatedPosts = relatedResponse.data.map(mappingPost);
    dispatch(actGetRelatedPosts(relatedPosts));
  };
}
export function actGetCommentAsync() {
  return async (dispatch) => {
    const response = await postService.getLastest();
    const posts = response.data.map(mappingPost);
    dispatch(actGetLastestPost(posts));
  };
}
