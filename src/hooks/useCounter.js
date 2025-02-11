/**
 * 计数器自定义 Hook
 * 提供计数器的基本功能：增加、减少和重置
 */

// 导入 React 的 useState Hook
import { useState } from 'react';

/**
 * 计数器 Hook
 * @param {number} initialValue - 计数器的初始值，默认为 0
 * @returns {
 *   count: number,
 *   increment: () => void,
 *   decrement: () => void,
 *   reset: () => void
 * } 返回计数器状态和操作方法
 */
function useCounter(initialValue = 0) {
  // 创建计数器状态
  const [count, setCount] = useState(initialValue);

  // 增加计数器值
  const increment = () => setCount(prev => prev + 1);

  // 减少计数器值
  const decrement = () => setCount(prev => prev - 1);

  // 重置计数器值为初始值
  const reset = () => setCount(initialValue);

  // 返回计数器状态和操作方法
  return {
    count,      // 当前计数值
    increment,  // 增加方法
    decrement,  // 减少方法
    reset       // 重置方法
  };
}

export default useCounter;
