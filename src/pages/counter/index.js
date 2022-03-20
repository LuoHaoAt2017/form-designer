import { Button } from "antd";
import { Link } from "umi";
import { connect } from "dva";

const Counter = ({ dispatch, counter }) => {
  const increase = () => {
    dispatch({
      type: "counter/increase",
    });
  };
  const decrease = () => {
    dispatch({
      type: "counter/decrease",
    });
  };
  return (
    <div>
      <Link to="/product">
        <Button>产品</Button>
      </Link>
      <Button>{counter}</Button>
      <Button.Group>
        <Button onClick={() => increase()}>increase</Button>
        <Button onClick={() => decrease()}>decrease</Button>
      </Button.Group>
    </div>
  );
};

export default connect(({ counter }) => counter)(Counter);
