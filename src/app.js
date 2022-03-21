import dva from "dva";
import { createLogger } from "redux-logger";

const app = dva({
  initialState: {},
  onError(evt) {
    console.error(evt.message);
  },
  onAction: [
    // 失效
    createLogger({
      level: "log",
      logger: "console",
    }),
  ],
  onStateChange: function (a, b, c) {
    // 失效
  },
});

app.model({
  namespace: "app",
  subscriptions: {
    // 失效
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log("history");
        if (pathname === "/product") {
          dispatch({
            type: "product/search",
          });
        }
      });
    },
  },
});


