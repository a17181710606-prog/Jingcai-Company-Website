# Database Schema (V1)

> 技术假设：使用 Supabase PostgreSQL + Auth + Storage + RLS。

## 1. 设计原则
- 设备主数据与状态日志分离
- 公共展示字段与内部运营字段明确区分
- 所有关键对象使用 UUID 主键
- 关键状态变化必须写入日志表
- 尽量保留扩展字段空间，避免 V1 过度设计

---

## 2. 枚举建议

### 2.1 equipment_status
- `available`
- `reserved`
- `checked_out`
- `maintenance`
- `unavailable`
- `retired`

### 2.2 owner_type
- `self_owned`
- `partner_owned`
- `affiliated`
- `third_party`

### 2.3 project_status
- `planning`
- `confirmed`
- `in_progress`
- `completed`
- `cancelled`

### 2.4 inventory_log_action
- `created`
- `updated`
- `status_changed`
- `checked_in`
- `checked_out`
- `assigned_to_project`
- `removed_from_project`
- `image_uploaded`
- `image_removed`
- `retired`

### 2.5 content_type
- `service`
- `showcase`
- `ai_project`

---

## 3. 表结构

## 3.1 profiles
用于补充 Supabase Auth 用户信息。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 对应 auth.users.id |
| full_name | text | 姓名 |
| role | text | 角色：super_admin/admin/warehouse/editor |
| avatar_url | text | 头像 |
| is_active | boolean | 是否启用 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

说明：
- 与 `auth.users` 一对一
- 业务权限以 `profiles.role` 为准

---

## 3.2 categories
设备分类表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| parent_id | uuid FK nullable | 父分类，支持二级分类 |
| name | text | 分类名称 |
| slug | text unique | URL / 标识用 |
| description | text | 描述 |
| sort_order | int | 排序 |
| is_public | boolean | 是否允许前台展示 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

---

## 3.3 owners
设备所属方表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| name | text | 所属方名称 |
| owner_type | text | self_owned / partner_owned / affiliated / third_party |
| contact_name | text | 联系人 |
| contact_phone | text | 联系电话 |
| contact_email | text | 邮箱 |
| notes | text | 备注 |
| is_active | boolean | 是否启用 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

---

## 3.4 equipment
设备主表，是后台库存系统的核心。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| asset_code | text unique | 内部唯一设备编号 |
| public_code | text nullable | 对外展示编号，可选 |
| name | text | 设备名称 |
| brand | text | 品牌 |
| model | text | 型号 |
| category_id | uuid FK | 分类 |
| owner_id | uuid FK | 所属方 |
| status | text | 当前状态 |
| cover_image_url | text | 封面图 |
| summary | text | 简介 |
| specifications | jsonb | 参数规格 |
| tags | text[] | 标签 |
| purchase_date | date nullable | 采购日期 |
| purchase_price | numeric nullable | 采购成本，内部字段 |
| replacement_value | numeric nullable | 重置价值，内部字段 |
| location_note | text | 当前库位/位置说明 |
| maintenance_note | text | 维修说明 |
| is_public | boolean | 是否公开展示 |
| is_featured | boolean | 是否推荐 |
| internal_notes | text | 内部备注 |
| created_by | uuid FK | 创建人 |
| updated_by | uuid FK | 更新人 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

说明：
- `specifications` 用于承载分类差异较大的设备参数
- `status` 存当前态，完整轨迹写入日志表
- 前台仅读取公开字段

---

## 3.5 equipment_images
设备图片表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| equipment_id | uuid FK | 设备 ID |
| storage_path | text | Supabase Storage 路径 |
| image_url | text | 可访问 URL |
| alt_text | text | 图片说明 |
| sort_order | int | 排序 |
| is_cover | boolean | 是否封面 |
| created_at | timestamptz | 创建时间 |
| created_by | uuid FK | 上传人 |

---

## 3.6 projects
项目表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| name | text | 项目名称 |
| client_name | text | 客户名称 |
| status | text | planning/confirmed/in_progress/completed/cancelled |
| start_date | date | 开始日期 |
| end_date | date | 结束日期 |
| location | text | 项目地点 |
| description | text | 项目说明 |
| notes | text | 内部备注 |
| created_by | uuid FK | 创建人 |
| updated_by | uuid FK | 更新人 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

---

## 3.7 project_equipment
项目与设备关系表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| project_id | uuid FK | 项目 ID |
| equipment_id | uuid FK | 设备 ID |
| assigned_from | timestamptz | 计划占用开始时间 |
| assigned_until | timestamptz | 计划占用结束时间 |
| note | text | 备注 |
| created_at | timestamptz | 创建时间 |
| created_by | uuid FK | 操作人 |

说明：
- 用于调度与占用关系记录
- 状态切换仍以 `equipment.status` + `inventory_logs` 为准

---

## 3.8 inventory_logs
库存/审计日志表，V1 关键表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| equipment_id | uuid FK | 设备 ID |
| project_id | uuid FK nullable | 关联项目 |
| action | text | 日志动作类型 |
| previous_status | text nullable | 变更前状态 |
| next_status | text nullable | 变更后状态 |
| quantity | int | 默认 1，预留批量操作 |
| note | text | 操作说明 |
| metadata | jsonb | 扩展上下文 |
| created_by | uuid FK | 操作人 |
| created_at | timestamptz | 操作时间 |

说明：
- 用于审计与追踪
- 普通运营不允许删除

---

## 3.9 content_items
统一内容表，用于服务、案例、AI 项目。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| content_type | text | service/showcase/ai_project |
| title | text | 标题 |
| slug | text unique | 前台路由标识 |
| summary | text | 摘要 |
| cover_image_url | text | 封面图 |
| body | jsonb | 富文本/模块化内容 |
| tags | text[] | 标签 |
| is_published | boolean | 是否发布 |
| published_at | timestamptz nullable | 发布时间 |
| seo_title | text | SEO 标题 |
| seo_description | text | SEO 描述 |
| created_by | uuid FK | 创建人 |
| updated_by | uuid FK | 更新人 |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

---

## 3.10 contact_inquiries
联系/询价表。

| 字段 | 类型 | 说明 |
|---|---|---|
| id | uuid PK | 主键 |
| name | text | 联系人姓名 |
| company | text | 公司名称 |
| phone | text | 电话 |
| email | text | 邮箱 |
| inquiry_type | text | contact / quote / cooperation |
| message | text | 内容 |
| equipment_id | uuid FK nullable | 若来自某设备详情页 |
| source_page | text | 来源页面 |
| created_at | timestamptz | 提交时间 |
| handled_at | timestamptz nullable | 处理时间 |
| handled_by | uuid FK nullable | 处理人 |

---

## 4. 索引建议

### equipment
- unique index on `asset_code`
- index on `category_id`
- index on `owner_id`
- index on `status`
- index on `is_public`
- gin index on `tags`

### inventory_logs
- index on `equipment_id`
- index on `project_id`
- index on `action`
- index on `created_at desc`

### projects
- index on `status`
- index on `(start_date, end_date)`

### content_items
- unique index on `slug`
- index on `content_type`
- index on `is_published`

---

## 5. Storage 规划建议

### bucket: `equipment-images`
- 存设备图片
- 路径建议：`equipment/{equipment_id}/{uuid}.jpg`

### bucket: `content-media`
- 存服务、案例、AI 项目图片
- 路径建议：`content/{content_type}/{content_id}/{uuid}.jpg`

---

## 6. RLS 策略原则

### 6.1 公共读取
- `equipment`：仅允许读取 `is_public = true` 的记录
- `categories`：仅允许读取 `is_public = true` 的分类
- `content_items`：仅允许读取 `is_published = true` 的内容

### 6.2 后台读取
- 登录后台用户可根据角色访问相应数据
- `warehouse` 可读设备、项目、日志；不可管理用户
- `editor` 可读公开相关内容与部分设备公开字段；不应修改库存关键状态

### 6.3 后台写入
- `super_admin` / `admin`：完整写权限
- `warehouse`：可变更设备状态、创建库存日志、维护项目设备关系
- `editor`：仅可维护 `content_items`，必要时可读公开设备字段

---

## 7. 建议约束
- `equipment.asset_code` 必须唯一且非空
- `project.end_date >= project.start_date`
- `equipment.status` 必须来自状态枚举
- `content_items.slug` 必须唯一
- `profiles.role` 必须来自预定义角色集合

---

## 8. 后续可扩展方向
- 设备保养计划表 `maintenance_records`
- 订单表 `orders`
- 报价单表 `quotes`
- 合同表 `contracts`
- 结算表 `settlements`
- 多组织隔离字段 `organization_id`
