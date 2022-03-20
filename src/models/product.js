import { GetProducts } from "@/services/product";
import { v4 as uuidv4 } from "uuid";

const DELETE_PRODUCT = "delete";
const STORE_PRODUCTS = "store";
const COPY_PRODUCT = "copy";
const UPDATE_PRODUCT = "update";
const CREATE_PRODUCT = 'create';

export default {
  namespace: "product",
  state: [],
  reducers: {
    // 处理同步动作
    [DELETE_PRODUCT](state, { payload: id }) {
      return state.filter((elem) => elem.id !== id);
    },
    [STORE_PRODUCTS](state, { payload: data }) {
      return data;
    },
    [COPY_PRODUCT](state, { payload: data }) {
      return state.concat(
        Object.assign({}, data, {
          id: uuidv4(),
          key: uuidv4(),
        })
      );
    },
    [UPDATE_PRODUCT](state, { payload: data }) {
      return state.map(function (item) {
        if (item.id === data.id) {
          return Object.assign({}, item, data);
        } else {
          return item;
        }
      });
    },
    [CREATE_PRODUCT](state) {

    }
  },
  effects: {
    // Action 处理器，处理异步动作，基于 Redux-saga 实现。Effect 指的是副作用。根据函数式编程，计算以外的操作都属于 Effect，典型的就是 I/O 操作、数据库读写。
    // Effect 是一个 Generator 函数，内部使用 yield 关键字，标识每一步的操作（不管是异步或同步）。
    // call: 执行异步函数
    // put: 发出一个 Action，类似于 dispatch
    *getProducts({ payload: ids }, { call, put }) {
      const result = yield call(GetProducts, ids);
      yield put({
        type: STORE_PRODUCTS,
        payload: result,
      });
    },
  },
};
