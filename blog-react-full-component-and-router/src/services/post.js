import { api } from "./api";

export const postService = {
  getAll(params) {
    return api.get("/wp/v2/posts?", {
      params: {
        lang: "vi",
        ...params,
      },
    });
  },
  getLastest() {
    // return api.get("/wp/v2/posts?per_page=3&page=1&lang=vi");
    return this.getAll({ per_page: 3, page: 1 });
  },
  getPopular() {
    return api.get("/wp/v2/posts?page=1&orderby=post_views&lang=vi&per_page=3");
    // return this.getAll({ per_page: 3, page: 1, orderby: post_views });
  },
  getGeneral(page) {
    // return api.get("/wp/v2/posts?per_page=2&lang=vi&page=" + page);
    return this.getAll({ page: page, per_page: 2 });
  },
  searchPost(searchValue, page) {
    // return api.get(
    //   "/wp/v2/posts?per_page=2&page=" +
    //     page +
    //     "&search=" +
    //     searchValue +
    //     "&lang=vi"
    // );
    return this.getAll({ page: page, per_page: 2, search: searchValue });
  },
  detailPost(slug) {
    // return api.get("/wp/v2/posts?slug=" + slug);
    return this.getAll({ slug: slug });
  },
  relatedPost(authorID, exclude) {
    return this.getAll({ author: authorID, per_page: 3, exclude: exclude });
  },
};
