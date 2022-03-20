import React from "react";
import PropTypes from "prop-types";
import { connect } from "dva";
import { Popconfirm, Button, Table } from "antd";

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Actions",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const Products = ({ dispatch, products }) => {
  const handleDelete = (id) => {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

function mapStateToProps({ products }) {
  return {
    products: products,
  };
}

export default connect(mapStateToProps)(Products);