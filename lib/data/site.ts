import type { RouteCard } from '@/types/navigation';

export const sitePages: RouteCard[] = [
  {
    title: '服务介绍',
    href: '/services',
    description: '展示影视制作、器材支持与现场执行能力。'
  },
  {
    title: '设备目录',
    href: '/equipment',
    description: '面向客户展示可公开的核心设备能力。'
  },
  {
    title: '案例展示',
    href: '/showcase',
    description: '沉淀品牌案例、AI 项目与服务能力证明。'
  },
  {
    title: 'AI 项目',
    href: '/ai-projects',
    description: '突出 AI 视频与智能内容生产能力。'
  },
  {
    title: '联系询价',
    href: '/contact',
    description: '为客户留下询价、沟通与合作入口。'
  }
];

export const adminPages: RouteCard[] = [
  {
    title: '库存仪表盘',
    href: '/admin',
    description: '查看库存状态、调度提醒与关键经营指标。'
  },
  {
    title: '设备列表',
    href: '/admin/equipment',
    description: '设备台账、编号、状态与所属方的核心管理入口。'
  },
  {
    title: '分类管理',
    href: '/admin/categories',
    description: '维护设备分类与录入标准。'
  },
  {
    title: '所属方管理',
    href: '/admin/owners',
    description: '管理自有、合作商与个人挂靠关系。'
  },
  {
    title: '项目管理',
    href: '/admin/projects',
    description: '关联拍摄任务与设备调度计划。'
  },
  {
    title: '库存日志',
    href: '/admin/inventory-logs',
    description: '审计所有关键状态流转与出入库记录。'
  },
  {
    title: '展示内容',
    href: '/admin/showcase',
    description: '维护官网服务介绍、案例与 AI 项目内容。'
  }
];
