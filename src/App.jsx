/**
 * 主应用组件
 * 展示自定义 Hooks 的使用示例，包括计数器和主题切换功能
 */

// 导入自定义 Hooks
import useCounter from './hooks/useCounter';
import useTheme from './hooks/useTheme';
// 导入样式文件
import './App.css';

/**
 * App 组件
 * @returns {JSX.Element} 渲染的 React 组件
 */
function App() {
  // 使用计数器 Hook，初始值为 0
  const { count, increment, decrement, reset } = useCounter(0);
  // 使用主题 Hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='app'>
      <h1>React Hooks Demo</h1>

      {/* 主题切换部分 */}
      <div className='theme-section'>
        <h2>Theme Toggle</h2>
        <button onClick={toggleTheme}>Current Theme: {theme}</button>
      </div>

      {/* 计数器部分 */}
      <div className='counter-section'>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        {/* 计数器控制按钮组 */}
        <div className='button-group'>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
