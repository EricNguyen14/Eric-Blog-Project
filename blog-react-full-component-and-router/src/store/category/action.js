import { categoryService } from "../../services/category";
export const ACT_GET_ALL_CATEGORY = "ACT_GET_ALL_CATEGORY";
export function actGetAllCategories(categories) {
  return {
    type: ACT_GET_ALL_CATEGORY,
    payload: {
      categories,
    },
  };
}
export function actGetAllCategoriesAsync() {
  return async (dispatch) => {
    const response = await categoryService.getAll();
    const categories = response.data;

    dispatch(actGetAllCategories(categories));
  };
}
