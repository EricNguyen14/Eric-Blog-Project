import { ACT_ADD_ITEM, ACT_DELETE_ITEM } from "./action";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  listData: [
    { id: uuidv4(), desc: "thu nhap thang 11", amount: 1000000 },
    { id: uuidv4(), desc: "thu nhap thang 12", amount: 2000000 },
    { id: uuidv4(), desc: "chi tieu thang 11", amount: -300000 },
    { id: uuidv4(), desc: "chi tieu thang 12", amount: -400000 },
  ],
};

function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_DELETE_ITEM:
      return {
        ...state,
        listData: state.listData.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case ACT_ADD_ITEM:
      let item = action.payload;
      let newList = [...state.listData];
      // newList = [...newList, item];
      newList.push(item);
      return { ...state, listData: newList };
    default:
      return state;
  }
}
export default budgetReducer;
