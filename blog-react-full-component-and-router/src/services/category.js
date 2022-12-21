import { api } from "./api";

export const categoryService = {
  getAll() {
    return api.get("/wp/v2/categories?per_page=100&page=1");
  },
};
