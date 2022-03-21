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

const Header = (props) => (
  <>
    <div>Header</div>
  </>
);

const Footer = (props) => (
  <>
    <div>Footer</div>
  </>
);

const getMenus = () => [
  {
    path: "/",
    name: "首页",
    icon: "home",
  },
  {
    path: "/product",
    name: "产品列表",
    icon: "home",
  },
];

export const layout = () => {
  return {
    headerRender: Header,
    footerRender: Footer,
    menu: { request: getMenus },
  };
};
