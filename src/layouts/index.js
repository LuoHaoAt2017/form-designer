import { ConfigProvider } from "antd";

const Layout = ({ children }) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default Layout;
