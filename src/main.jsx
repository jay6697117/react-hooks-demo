/**
 * 应用程序的入口文件
 * 负责将 React 应用挂载到 DOM 上
 */

// 导入 ReactDOM 的客户端渲染方法
import ReactDOM from 'react-dom/client'
// 导入根组件 App
import App from './App'

// 创建 React 根节点并渲染应用
ReactDOM.createRoot(
  // 获取 ID 为 'root' 的 DOM 元素作为渲染容器
  document.getElementById('root')
).render(
  // 渲染根组件 App
  <App />
)
