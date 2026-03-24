# 第一轮开发任务拆分清单 / Build Plan

## 阶段 0：产品与架构文档（当前阶段）

### 目标
输出可指导开发的基础文档，统一范围、模型与权限边界。

### 任务
1. 完成 `docs/prd.md`
2. 完成 `docs/site-map.md`
3. 完成 `docs/db-schema.md`
4. 完成 `docs/permission-matrix.md`
5. 明确开发里程碑与任务拆分

### 交付物
- 文档齐全并可用于下一阶段实施

---

## 阶段 1：项目骨架搭建

### 目标
建立可持续迭代的 Next.js + TypeScript + Supabase 基础工程。

### 任务 1.1：初始化应用
- 初始化 Next.js（App Router）+ TypeScript
- 配置 ESLint / Prettier（保持轻量）
- 配置基础目录结构：`app/`, `components/`, `lib/`, `types/`, `docs/`

### 任务 1.2：Supabase 接入
- 创建 Supabase 客户端封装
- 区分 server / client 使用方式
- 配置环境变量模板

### 任务 1.3：路由布局
- 搭建前台 `PublicLayout`
- 搭建后台 `AdminLayout`
- 预留前后台导航

### 任务 1.4：鉴权与中间件
- 创建 `/admin/login`
- 建立后台路由守卫
- 完成基础角色读取逻辑

### 阶段交付
- 项目可本地运行
- 后台登录链路可验证
- 前后台路由骨架存在

---

## 阶段 2：数据库与权限落地

### 目标
把文档模型落到 Supabase 数据库、Storage、RLS。

### 任务 2.1：数据库 Migration
- 创建枚举
- 创建 `profiles`
- 创建 `categories`
- 创建 `owners`
- 创建 `equipment`
- 创建 `equipment_images`
- 创建 `projects`
- 创建 `project_equipment`
- 创建 `inventory_logs`
- 创建 `content_items`
- 创建 `contact_inquiries`

### 任务 2.2：索引与约束
- 唯一索引
- 外键
- 日期约束
- 状态约束

### 任务 2.3：RLS 策略
- 公共读取策略
- 后台角色读取策略
- 后台角色写入策略

### 任务 2.4：Storage Bucket
- `equipment-images`
- `content-media`

### 阶段交付
- 数据模型可用
- 基础安全边界可用

---

## 阶段 3：后台库存系统（P0）

### 目标
先完成“内部可运营”的库存后台。

### 任务 3.1：后台仪表盘 `/admin`
- 统计卡片
- 状态分布
- 最近库存日志
- 快捷入口

### 任务 3.2：分类管理 `/admin/categories`
- 分类列表
- 新建/编辑分类
- 排序与公开状态

### 任务 3.3：所属方管理 `/admin/owners`
- 列表
- 新建/编辑
- 联系信息与备注

### 任务 3.4：设备列表 `/admin/equipment`
- 列表表格
- 搜索
- 状态/分类/所属方筛选
- 公开状态标识

### 任务 3.5：新建设备 `/admin/equipment/new`
- 基础信息表单
- 参数 JSON/结构化录入
- 初始状态设置
- 图片上传

### 任务 3.6：编辑设备 `/admin/equipment/[id]`
- 编辑基础信息
- 变更状态
- 管理图片
- 查看设备日志摘要

### 任务 3.7：库存日志 `/admin/inventory-logs`
- 日志列表
- 设备/项目/时间筛选
- 明细查看

### 任务 3.8：项目管理 `/admin/projects`
- 项目列表
- 新建/编辑
- 关联设备
- 占用周期展示

### 阶段交付
- 设备 CRUD 可用
- 状态流转可追踪
- 出入库与项目调度基础能力可用

---

## 阶段 4：前台展示层（P1）

### 目标
在后台数据稳定后，建立对外展示页面。

### 任务 4.1：首页 `/`
- 品牌介绍
- 核心服务
- 推荐设备
- Showcase / AI 项目入口

### 任务 4.2：服务页 `/services`
- 服务内容展示

### 任务 4.3：设备目录 `/equipment`
- 公开设备列表
- 分类筛选
- 搜索

### 任务 4.4：设备详情 `/equipment/[id]`
- 设备图集
- 参数说明
- 联系询价 CTA

### 任务 4.5：案例展示 `/showcase` `/showcase/[slug]`
- 列表与详情

### 任务 4.6：AI 项目 `/ai-projects`
- AI 能力与项目展示

### 任务 4.7：联系页 `/contact`
- 联系方式
- 表单提交

### 阶段交付
- 对外网站可展示公开内容
- 可支持联系/询价入口

---

## 阶段 5：质量完善与上线准备

### 目标
保障系统基础可用性、可维护性与部署准备。

### 任务
- 环境变量校验
- 错误边界与空状态处理
- 基础埋点/审计补充
- SEO 基础配置
- Vercel 部署配置
- README 补充

---

## 建议实现顺序（首轮 Sprint）

### Sprint 1
- 项目初始化
- Supabase 接入
- 登录/鉴权
- DB migration 初版

### Sprint 2
- 分类管理
- 所属方管理
- 设备列表/新建/编辑
- 图片上传

### Sprint 3
- 状态流转
- 库存日志
- 项目管理与设备关联
- 仪表盘统计

### Sprint 4
- 前台首页
- 服务页
- 设备目录/详情
- Showcase / AI Projects / Contact

---

## 首轮任务拆分（可直接转 issue）

1. 初始化 Next.js + TypeScript 项目骨架
2. 接入 Supabase 与环境变量配置
3. 建立基础数据库 migration 与 RLS
4. 实现后台登录与角色鉴权
5. 搭建后台 Layout 与导航
6. 完成分类管理页面与数据流
7. 完成所属方管理页面与数据流
8. 完成设备列表页与筛选
9. 完成新建设备页与编辑页
10. 完成设备图片上传与展示
11. 完成设备状态切换与日志写入
12. 完成库存日志页
13. 完成项目管理与设备关联
14. 完成后台仪表盘统计
15. 完成前台首页与服务页
16. 完成设备目录与设备详情页
17. 完成 Showcase / AI Projects / Contact 页面
18. 完成部署配置与上线前检查
