export default [
  {
    path: "/",
    component: "@/layouts/index.js",
    routes: [
      {
        path: "/",
        component: "@/pages/products",
        title: '产品列表'
      }
    ],
  },
];
