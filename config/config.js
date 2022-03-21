import routes from "./routes";

export default {
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
    navTheme: 'light'
  },
  routes: routes,
  presets: [], // 请不要配置 npm 包的预设，否则会报重复注册的错误
  plugins: [], // 请不要配置 npm 包的插件，否则会报重复注册的错误
  mock: {
    
  }
};
