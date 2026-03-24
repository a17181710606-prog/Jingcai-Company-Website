import { SummaryCards } from '@/components/admin/summary-cards';
import { StatusTable } from '@/components/admin/status-table';
import { getSessionSnapshot } from '@/lib/auth/session';
import { hasSupabaseEnv } from '@/lib/supabase/env';

export default async function AdminDashboardPage() {
  const session = await getSessionSnapshot();
  return (
    <>
      <section className="page-section surface page-header">
        <div>
          <p className="eyebrow">Admin dashboard</p>
          <h1>库存总览仪表盘</h1>
        </div>
        <p>
          该骨架页优先体现后台可运营性：先展示关键库存指标、状态样例与后续功能入口，再逐步接入真实 Supabase 数据。
        </p>
        <div className="notice">
          {hasSupabaseEnv()
            ? '已检测到 Supabase 环境变量，可以继续接入真实查询与 Auth。'
            : '尚未配置 Supabase 环境变量，当前页面使用静态占位数据以便继续搭建结构。'}
          <div className="inline-links" style={{ marginTop: '12px' }}>
            <span className="tag">当前角色：{session.role ?? 'visitor'}</span>
            <form action="/api/auth/logout" method="post">
              <button className="button secondary" type="submit">退出演示登录</button>
            </form>
          </div>
        </div>
      </section>
      <SummaryCards />
      <div className="metrics-grid">
        <StatusTable />
        <section className="surface page-section">
          <p className="eyebrow">Next build targets</p>
          <h2>下一批后台任务</h2>
          <ul className="check-list">
            <li>分类管理</li>
            <li>所属方管理</li>
            <li>设备 CRUD 与表单</li>
            <li>出入库日志写入</li>
            <li>状态流转审计</li>
          </ul>
        </section>
      </div>
    </>
  );
}
