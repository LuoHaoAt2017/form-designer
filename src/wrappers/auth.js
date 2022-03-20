import { Redirect } from "umi";
import { useState } from "react";

export default (props) => {
  const useAuth = () => {
    const [isLogin, setLogin] = useState(false);
    return isLogin;
  };
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
};
