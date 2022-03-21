// export default [
//   {
//     path: "/",
//     component: "@/layouts/index.js",
//     routes: [
//       {
//         path: "/counter",
//         component: "@/pages/counter/index",
//         title: "首页",
//         // access: "canReadCounter",
//         // 不展示顶栏
//         // headerRender: false,
//         // 不展示菜单
//         // menuRender: false,
//       },
//       {
//         path: "/product",
//         component: "@/pages/product/index",
//         title: "产品列表",
//         // access: "canReadProduct",
//       },
//       {
//         path: "/",
//         redirect: "/counter",
//       },
//     ],
//   },
// ];

export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: "/",
        component: "@/pages/counter/index",
        title: "首页",
      },
      {
        path: "/product",
        component: "@/pages/product/index",
        title: "产品列表",
      },
    ]
  }
];
