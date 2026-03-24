import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero surface">
      <div>
        <p className="eyebrow">阶段 B / Project Skeleton</p>
        <h1>先把后台库存骨架搭起来，再让官网复用公开数据。</h1>
        <p className="lead">
          当前版本完成 Next.js + TypeScript + Supabase 基础接入、前后台路由分层、登录占位与库存仪表盘骨架，方便继续落地设备台账与状态追踪。
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/admin/login">
            进入后台登录
          </Link>
          <Link className="button secondary" href="/equipment">
            查看公开设备目录
          </Link>
        </div>
      </div>
      <div className="surface hero-panel">
        <p className="eyebrow">V1 核心目标</p>
        <ul>
          <li>设备台账清晰</li>
          <li>库存状态可视化</li>
          <li>出入库可追踪</li>
          <li>前台只展示可公开信息</li>
        </ul>
      </div>
    </section>
  );
}
