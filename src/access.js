// initialState 是通过初始化状态插件 @umijs/plugin-initial-state 提供的数据，你可以使用该数据来初始化你的用户权限。

export default function(initialState) {
  if (initialState.isSuperAdmin) {
    return {
      canReadProduct: true,
      canReadCounter: true,
      // 更加精细化地控制页面元素
      canCreateProduct: true,
      canDeleteProduct: true,
      canCopyProduct: true
    }
  } else if (initialState.isAppCreator) {
    return {
      canReadProduct: true,
      canReadCounter: true,
      // 更加精细化地控制页面元素
      canCreateProduct: true,
      canDeleteProduct: false,
      canCopyProduct: false
    }
  } else {
    return {
      canReadProduct: false,
      canReadCounter: true,
    }
  }
}