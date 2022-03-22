import dva from "dva";
import { GetUserInfo } from '@/services';

const app = dva({
  initialState: {},
  onError(evt) {
    console.error(evt.message);
  }
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

export const layout = () => {
  return {
    headerRender: Header,
    footerRender: Footer
  };
};

export async function getInitialState() {
  // 在获取到初始状态前，页面其他部分的渲染都会被阻止。
  const resp = await GetUserInfo();
  console.log('UserInfo: ', resp);
  return resp;
}