import { DELETE_PRODUCT } from "./types";
export default {
  namespace: "products",
  state: [
    {
      id: "001",
      key: "001",
      name: "antd",
    },
    {
      id: "002",
      key: "002",
      name: "antv",
    },
  ],
  reducers: {
    [DELETE_PRODUCT](state, { payload: id }) {
      return state.filter((elem) => elem.id !== id);
    },
  },
};
