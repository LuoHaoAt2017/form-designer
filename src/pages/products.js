import React, { useEffect, useContext } from "react";
import { connect } from "dva";
import ProductList from "@/components/products";

const Container = ({ dispatch, products }) => {
  const handleDelete = (id) => {
    // dispatch 是一个函数方法，用来将 Action 发送给 State。
    // 被 connect 的 Component 会自动在 props 中拥有 dispatch 方法。
    dispatch({
      type: "products/delete",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({
      type: "products/getProducts",
      payload: [],
    });
  }, []);
  return <ProductList onDelete={handleDelete} products={products} />;
};

function mapStateToProps({ products }) {
  return {
    products: products,
  };
}

// connect 是一个函数，绑定 State 到 View。返回的也是一个 React 组件。
// connect 方法传入的第一个参数是 mapStateToProps 函数，mapStateToProps 函数会返回一个对象，用于建立 State 到 Props 的映射关系。
export default connect(mapStateToProps)(Container);
