# Site Map

## 1. 信息架构总览
系统分为两大部分：

- **前台公开站点**：展示公司服务、设备能力、案例与 AI 项目
- **后台管理系统**：用于设备、库存、项目与内容管理

---

## 2. 前台路由结构

### `/`
**首页**
- Hero / 品牌介绍
- 核心服务能力入口
- 推荐设备
- 案例精选
- AI 项目精选
- 联系询价 CTA

### `/services`
**服务页**
- 服务总览
- 拍摄执行服务
- 器材支持能力
- 技术团队能力
- 合作流程

### `/equipment`
**设备目录**
- 分类筛选
- 搜索
- 设备卡片列表
- 推荐/热门标签

### `/equipment/[id]`
**设备详情**
- 设备基本信息
- 图片
- 参数规格
- 适用场景
- 相关推荐
- 询价入口

### `/showcase`
**案例列表**
- 全部案例
- 分类/标签筛选
- 案例卡片

### `/showcase/[slug]`
**案例详情**
- 标题
- 封面
- 图文介绍
- 项目亮点
- 相关服务 / 相关设备

### `/ai-projects`
**AI 项目展示**
- AI 能力介绍
- AI 项目列表
- 应用场景

### `/contact`
**联系页**
- 公司联系方式
- 表单 / 询价入口
- 微信 / 邮箱 / 电话

---

## 3. 后台路由结构

### `/admin/login`
**后台登录**
- 登录表单
- 忘记密码（可后续预留）

### `/admin`
**后台仪表盘**
- 库存统计卡片
- 状态分布
- 最近日志
- 快捷入口

### `/admin/equipment`
**设备列表页**
- 列表
- 搜索
- 筛选
- 批量查看（V1 可只预留）
- 新建设备入口

### `/admin/equipment/new`
**新建设备**
- 基础信息表单
- 参数录入
- 图片上传
- 初始状态设置

### `/admin/equipment/[id]`
**设备详情 / 编辑页**
- 基础信息
- 图片管理
- 状态变更
- 项目关联
- 操作日志摘要

### `/admin/categories`
**分类管理**
- 分类列表
- 新建 / 编辑 / 排序 / 是否公开

### `/admin/owners`
**所属方管理**
- 所属方列表
- 新建 / 编辑
- 联系方式 / 备注

### `/admin/projects`
**项目管理**
- 项目列表
- 新建 / 编辑项目
- 项目设备关联

### `/admin/inventory-logs`
**库存日志**
- 日志列表
- 按设备 / 项目 / 操作类型 / 时间筛选

### `/admin/showcase`
**展示内容管理**
- 服务内容管理
- 案例管理
- AI 项目管理
- 发布状态控制

---

## 4. 建议组件分层

### 4.1 前台布局
- `PublicLayout`
  - Header
  - Footer
  - Breadcrumb（部分页面）
  - CTA 区块

### 4.2 后台布局
- `AdminLayout`
  - Sidebar
  - Topbar
  - Auth Guard
  - Global Search（可后续扩展）

---

## 5. 导航建议

### 前台主导航
- 首页
- 服务
- 设备目录
- 案例展示
- AI 项目
- 联系我们

### 后台侧边导航
- 仪表盘
- 设备管理
- 分类管理
- 所属方管理
- 项目管理
- 出入库日志
- 展示内容

---

## 6. 页面优先级

### P0（必须先做）
- `/admin/login`
- `/admin`
- `/admin/equipment`
- `/admin/equipment/new`
- `/admin/equipment/[id]`
- `/admin/categories`
- `/admin/owners`
- `/admin/projects`
- `/admin/inventory-logs`

### P1（后台完成后接入）
- `/`
- `/services`
- `/equipment`
- `/equipment/[id]`
- `/showcase`
- `/showcase/[slug]`
- `/ai-projects`
- `/contact`

---

## 7. URL 设计原则
- 前台只暴露公开内容
- 后台 URL 按资源分组，便于扩展
- `equipment/[id]` 在 V1 可先使用数据库 UUID；若后续 SEO 需要，可升级为 slug + id
- `showcase/[slug]` 建议使用内容 slug，方便传播
