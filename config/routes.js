export default [
  {
    path: "/",
    component: "@/pages/counter/index",
    name: "首页",
    menuRender: false
  },
  {
    path: "/product",
    component: "@/pages/product/index",
    name: "产品列表",
    access: 'canReadProduct',
  },
];