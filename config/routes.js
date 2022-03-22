export default [
  {
    path: "/",
    component: "@/pages/counter/index",
    name: "home",
    menuRender: false,
  },
  {
    path: "/product",
    component: "@/pages/product/index",
    name: "product",
    access: "canReadProduct",
  },
  {
    path: "/hospital",
    component: "@/pages/hospital/index",
    name: "hospital",
  },
];