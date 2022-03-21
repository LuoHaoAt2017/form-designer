import ProLayout from "@ant-design/pro-layout";
import { Link } from "umi";
import { Icon } from "antd";

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

const menuDataRender = () => [
  {
    key: "counter",
    name: "首页",
    path: "/counter",
  },
  {
    key: "product",
    name: "产品列表",
    path: "/product",
  },
];

const menuItemRender = ({ path, name, icon }) => {
  return (
    <Link to={path}>
      <Icon type={icon}></Icon>
      {name}
    </Link>
  );
};

function getMenus() {
  return [
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
}

const Layout = ({ children }) => {
  return (
    <ProLayout
      fixSiderbar
      headerRender={() => <Header />}
      footerRender={() => <Footer />}
      navTheme="light"
      layout="side"
      siderWidth={240}
      // menuDataRender={menuDataRender}
      menuItemRender={menuItemRender}
      menu={{ request: getMenus }}
    >
      {children}
    </ProLayout>
  );
};

export default Layout;
