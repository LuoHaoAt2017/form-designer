import { Form, Button, Input } from "antd";

const Login = (props) => {
  return (
    <Form>
      <Form.Item label="用户名" labelCol={{ span: 4 }}>
        <Input></Input>
      </Form.Item>
      <Form.Item label="密码" labelCol={{ span: 4 }}>
        <Input></Input>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button.Group>
          <Button
            type="primary"
            onClick={() =>
              props.history.push({
                pathname: "/home",
                query: {
                  userId: "123",
                },
              })
            }
          >
            登录
          </Button>
          <Button
            onClick={() =>
              props.history.push({
                pathname: "/reset",
                query: {
                  username: "luohao",
                },
              })
            }
          >
            忘记密码
          </Button>
        </Button.Group>
      </Form.Item>
    </Form>
  );
};

export default Login;
