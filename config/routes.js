export default [
  {
    path: "/",
    component: "@/layouts/index.js",
    routes: [
      {
        path: "/counter",
        component: "@/pages/counter/index",
        title: "首页",
      },
      {
        path: "/product",
        component: "@/pages/product/index",
        title: "产品列表",
      },
      {
        path: "/",
        redirect: "/counter",
      },
    ],
  },
];
