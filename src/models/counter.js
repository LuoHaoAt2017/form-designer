export default {
  namespace: "counter",
  state: {
    counter: 0,
  },
  reducers: {
    increase(state) {
      return {
        counter: state.counter + 1,
      };
    },
    decrease(state) {
      return {
        counter: state.counter - 1,
      };
    },
  },
};
