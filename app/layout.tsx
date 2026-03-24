import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '景彩视界 | 设备管理与展示系统',
  description: '内部优先的影视设备管理与展示系统项目骨架。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
