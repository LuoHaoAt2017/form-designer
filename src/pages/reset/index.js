import { useEffect, useState } from "react";
import { Form, Button, Input } from "antd";
import { Link } from "umi";

const Reset = (props) => {
  const [username, setUserName] = useState("");
  const [prePswd, setPrePswd] = useState("");
  const [curPswd, setCurName] = useState("");

  useEffect(() => {
    setUserName(props.location.query.username);
  });

  return (
    <Form>
      <Form.Item label="用户名" labelCol={{ span: 4 }}>
        <Input readOnly disabled value={username}></Input>
      </Form.Item>
      <Form.Item label="旧密码" labelCol={{ span: 4 }}>
        <Input
          value={prePswd}
          onChange={(evt) => setPrePswd(evt.value)}
        ></Input>
      </Form.Item>
      <Form.Item label="新密码" labelCol={{ span: 4 }}>
        <Input
          value={curPswd}
          onChange={(evt) => setCurName(evt.value)}
        ></Input>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Link to="/login">
          <Button type="primary" block>
            确定
          </Button>
        </Link>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4 }}>
        <Link to="/login">
          <Button type="primary" block>
            前往登录
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default Reset;
