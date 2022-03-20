export default [
  {
    path: "/login",
    component: "./login/index.js",
    exact: true,
    title: '登录'
  },
  {
    path: '/reset',
    component: "./reset/index.js",
    exact: true,
    title: '重置'
  },
  {
    path: "/",
    component: "@/layouts/index.js",
    routes: [
      {
        path: "/home",
        component: "@/pages/home",
        title: '首页'
      },
      {
        path: "/designer",
        component: "@/pages/designer",
        title: '表单设计器'
      },
      {
        path: "/profile",
        component: "@/pages/profile", // 可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
        wrappers: ["@/wrappers/auth"],
        title: '个人画像'
      },
      {
        path: "/",
        redirect: "/home",
      },
    ],
  },
];
