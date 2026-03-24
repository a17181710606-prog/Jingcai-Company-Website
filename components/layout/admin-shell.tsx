import Link from 'next/link';
import { ReactNode } from 'react';

import { adminPages } from '@/lib/data/site';

export function AdminShell({ children }: { children?: ReactNode }) {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar surface">
        <div>
          <p className="eyebrow">Admin Console</p>
          <h2>库存系统骨架</h2>
          <p className="muted">后台优先，先承载设备台账、状态与调度能力。</p>
        </div>
        <nav className="sidebar-nav">
          {adminPages.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.title}
            </Link>
          ))}
          <Link href="/admin/users">用户管理（预留）</Link>
        </nav>
      </aside>
      <div className="dashboard-content">{children}</div>
    </div>
  );
}
