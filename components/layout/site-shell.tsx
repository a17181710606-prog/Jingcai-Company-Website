import Link from 'next/link';
import { ReactNode } from 'react';

const siteNav = [
  { href: '/', label: '首页' },
  { href: '/services', label: '服务' },
  { href: '/equipment', label: '设备目录' },
  { href: '/showcase', label: '案例展示' },
  { href: '/ai-projects', label: 'AI 项目' },
  { href: '/contact', label: '联系' }
];

export function SiteShell({ children }: { children?: ReactNode }) {
  return (
    <div className="app-shell site-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">景彩视界 Jingcai Vision</p>
          <Link className="brand" href="/">
            内部优先的影视设备管理与展示系统
          </Link>
        </div>
        <nav className="nav-list">
          {siteNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
