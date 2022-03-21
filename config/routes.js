// export default [
//   {
//     path: '/',
//     component: '../layouts/index',
//     routes: [
//       {
//         path: "/",
//         component: "@/pages/counter/index",
//         title: "首页",
//         headerRender: false,
//         menuRender: false,
//       },
//       {
//         path: "/product",
//         component: "@/pages/product/index",
//         title: "产品列表",
//       },
//     ]
//   }
// ];
export default [
  {
    path: "/",
    component: "@/pages/counter/index",
    title: "首页",
  },
  {
    path: "/product",
    component: "@/pages/product/index",
    title: "产品列表",
    access: 'canProductRead',
  },
];