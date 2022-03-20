import React from "react";
import PropTypes from "prop-types";
import { Popconfirm, Button, Table } from "antd";
import {
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  CopyOutlined,
  PlusOutlined
} from "@ant-design/icons";

const ProductList = ({ onDelete, onCopy, onPlus, products }) => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
    },
    // {
    //   title: "地址",
    //   dataIndex: "address",
    // },
    // {
    //   title: "创建时间",
    //   dataIndex: "created",
    // },
    // {
    //   title: "修改时间",
    //   dataIndex: "updated",
    // },
    {
      title: "操作",
      render: (text, record) => {
        return (
          <Button.Group>
            <Button icon={<EyeOutlined />}>详情</Button>
            <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
              <Button type="danger" icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
            <Button type="primary" icon={<EditOutlined />}>
              编辑
            </Button>
            <Button icon={<CopyOutlined />} onClick={() => onCopy(record)}>复制</Button>
            <Button icon={<PlusOutlined />} onClick={() => onPlus(record)}>新增</Button>
          </Button.Group>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={products}
      columns={columns}
      bordered
      rowSelection={{ type: "checkbox", fixed: true }}
    />
  );
};

ProductList.propTypes = {
  onCopy: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
