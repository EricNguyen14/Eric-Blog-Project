export const ACT_DELETE_ITEM = "ACT_DELETE_ITEM";
export const ACT_ADD_ITEM = "ACT_ADD_ITEM";

export const actDeleteItemById = (id) => {
  return {
    type: ACT_DELETE_ITEM,
    payload: { id },
  };
};

export const actAddItem = (item) => {
  return {
    type: ACT_ADD_ITEM,
    payload: item,
  };
};
