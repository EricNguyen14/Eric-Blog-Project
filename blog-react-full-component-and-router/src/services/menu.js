import { api } from "./api";

export const menuService = {
  getMenu() {
    return api.get("/menus/v1/menus/main-menu-vi");
  },
};
