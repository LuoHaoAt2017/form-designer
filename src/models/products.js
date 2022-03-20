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
  reducers: { // 处理同步动作
    [DELETE_PRODUCT](state, { payload: id }) {
      return state.filter((elem) => elem.id !== id);
    },
  },
  effects: { 
    // Action 处理器，处理异步动作，基于 Redux-saga 实现。Effect 指的是副作用。根据函数式编程，计算以外的操作都属于 Effect，典型的就是 I/O 操作、数据库读写。
    // Effect 是一个 Generator 函数，内部使用 yield 关键字，标识每一步的操作（不管是异步或同步）。
    // call: 执行异步函数
    // put: 发出一个 Action，类似于 dispatch
  }
};
