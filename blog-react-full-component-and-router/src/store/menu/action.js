import { mappingMenu } from "../../helpers";
import { menuService } from "../../services/menu";
export const ACT_GET_MENU = "ACT_GET_MENU";
export function actGetMenu(menu) {
  return {
    type: ACT_GET_MENU,
    payload: {
      menu: menu,
    },
  };
}
export function actGetMenuAsync() {
  return async (dispatch) => {
    const response = await menuService.getMenu();
    const menu = response.data.items.map(mappingMenu);
    dispatch(actGetMenu(menu));
  };
}
