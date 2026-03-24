export default function AdminLoginPage() {
  return (
    <section className="form-card surface">
      <p className="eyebrow">Admin login</p>
      <h1>后台登录</h1>
      <p>当前提供结构化登录入口与中间件联调能力。接入真实 Supabase Auth 后，可替换为邮箱密码或 magic link。</p>
      <form action="/api/auth/demo-login" className="form-grid" method="post">
        <label>
          管理员邮箱
          <input defaultValue="admin@jingcai.local" name="email" placeholder="you@company.com" type="email" />
        </label>
        <label>
          登录身份
          <select defaultValue="admin" name="role">
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
          </select>
        </label>
        <button className="button primary" type="submit">
          创建演示登录态
        </button>
      </form>
      <p className="footer-note">该页面会写入本地 Cookie，便于验证 `/admin` 受保护路由与 visitor/admin 分流逻辑。</p>
    </section>
  );
}
