/**
 * Vite 配置文件
 * 该文件定义了项目的构建和开发配置
 */

// 导入 Vite 的配置函数
import { defineConfig } from 'vite'
// 导入 React 插件，用于处理 React 特定的功能
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置 Vite 插件
  plugins: [
    // 启用 React 插件，用于处理 JSX 转换、Fast Refresh 等功能
    react()
  ],

  // 配置模块解析选项
  resolve: {
    // 配置文件扩展名解析顺序
    // 当导入模块没有指定扩展名时，会按此顺序尝试解析
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // esbuild 配置
  esbuild: {
    // 将所有 .js 文件视为 JSX 文件
    loader: 'jsx',
    // 包含 src 目录下的所有 .js 和 .jsx 文件
    include: /src\/.*\.jsx?$/,
    // 排除的文件模式（当前为空）
    exclude: []
  }
})
