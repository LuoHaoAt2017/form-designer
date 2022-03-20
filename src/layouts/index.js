import { Divider } from "antd";
import Header from "@/components/header";
import Footer from "@/components/footer";

const BasicLayout = (props) => {
  // 不同的全局 layout
  if (props.location.pathname === '/designer') {
    return (
      <>
        {props.children}
      </>
    );
  }
  return (
    <>
      <Header></Header>
      <Divider></Divider>
      {props.children}
      <Divider></Divider>
      <Footer></Footer>
    </>
  );
};

export default BasicLayout;
