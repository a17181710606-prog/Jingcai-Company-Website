export const ADMIN_SESSION_COOKIE = 'jc_admin_session';
export const ADMIN_ROLE_COOKIE = 'jc_user_role';

export const ADMIN_ROLES = ['admin', 'super_admin'] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];
