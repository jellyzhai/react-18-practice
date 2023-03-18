import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * 移动端宽度适配
 * 使用 rem 单位设置元素宽度
 * 当元素设置 750rem 时，乘以 HTML 字体大小 (100 / 750 + 'vw')，得出的宽度就是 100vw 即屏幕宽度
 */
document.documentElement.style.fontSize = 100 / 750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 去掉严格模式，在使用reducer 时，防止数据多操作一遍
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
