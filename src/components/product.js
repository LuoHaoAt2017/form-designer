import React from "react";
import PropTypes from "prop-types";
import { Popconfirm, Button, Table } from "antd";
import { useAccess, Access } from 'umi'
import {
  DeleteOutlined,
  EyeOutlined,
  EditOutlined,
  CopyOutlined,
  PlusOutlined,
  LockOutlined,
} from "@ant-design/icons";

const ProductList = ({ onDelete, onCopy, onPlus, products }) => {
  const access = useAccess();
  const { canCreateProduct, canDeleteProduct, canCopyProduct } = access;
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
            <Access accessible={canDeleteProduct} fallback={<Button icon={<LockOutlined/>}>删除</Button>}>
              <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                  <Button type="danger" icon={<DeleteOutlined />}>
                    删除
                  </Button>
                </Popconfirm>
            </Access>
            <Button type="primary" icon={<EditOutlined />}>
              编辑
            </Button>
            <Access accessible={canCopyProduct} fallback={<Button icon={<LockOutlined/>}>复制</Button>}>
              <Button onClick={() => onCopy(record)} icon={<CopyOutlined />}>
                复制
              </Button>
            </Access>

            <Access accessible={canCreateProduct} fallback={<Button icon={<LockOutlined/>}>新增</Button>}>
              <Button icon={<PlusOutlined />} onClick={() => onPlus(record)}>
                新增
              </Button>
            </Access>
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
