/**
 * 主题切换自定义 Hook
 * 提供明暗主题的切换功能，并在主题变化时更新 DOM
 */

// 导入需要的 React Hooks
import { useState, useEffect } from 'react';

/**
 * 主题管理 Hook
 * @returns {
 *   theme: string,       - 当前主题（'light' 或 'dark'）
 *   toggleTheme: () => void  - 切换主题的方法
 * }
 */
function useTheme() {
  // 初始化主题状态，默认为亮色主题
  const [theme, setTheme] = useState('light');

  /**
   * 副作用：当主题变化时，更新文档根元素的 data-theme 属性
   * 这允许我们通过 CSS 变量来控制主题样式
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * 切换主题的方法
   * 在明暗主题之间切换
   */
  const toggleTheme = () => {
    alert('toggleTheme run');
    setTheme(prevTheme => {
      const res = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', res);
      return res;
    });
  };

  // 返回当前主题状态和切换方法
  return {
    theme, // 当前主题
    toggleTheme // 切换主题的方法
  };
}

export default useTheme;
