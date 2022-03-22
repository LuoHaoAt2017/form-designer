import dva from "dva";
import { useIntl, setLocale, getLocale } from "umi";
import { useState, useEffect } from "react";
import { Select } from "antd";
import { GetUserInfo } from "@/services";

const app = dva({
  initialState: {},
  onError(evt) {
    console.error(evt.message);
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

const Header = (props) => {
  const locale = getLocale();
  const [lang, setLang] = useState(locale);
  const intl = useIntl();
  const changeLang = (val) => {
    setLocale(val, false);
    setLang(val);
  };
  return (
    <Select value={lang} onChange={(v) => changeLang(v)}>
      <Select.Option value="zh-CN">
        {intl.formatMessage({ id: "chinese" })}
      </Select.Option>
      <Select.Option value="en-US">
        {intl.formatMessage({ id: "english" })}
      </Select.Option>
    </Select>
  );
};

const Footer = (props) => {
  const intl = useIntl();
  return (
    <>
      <div>{intl.formatMessage({ id: "footer" })}</div>
    </>
  );
};

export const layout = () => {
  return {
    locale: true,
    headerRender: () => <Header></Header>,
    footerRender: () => <Footer></Footer>,
  };
};

export async function getInitialState() {
  // 在获取到初始状态前，页面其他部分的渲染都会被阻止。
  const resp = await GetUserInfo();
  console.log("UserInfo: ", resp);
  return resp;
}
