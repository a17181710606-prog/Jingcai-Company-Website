import { cookies } from 'next/headers';

import { ADMIN_ROLE_COOKIE, ADMIN_ROLES, ADMIN_SESSION_COOKIE, type AdminRole } from '@/lib/auth/constants';

export type SessionSnapshot = {
  isAuthenticated: boolean;
  role: AdminRole | null;
};

export async function getSessionSnapshot(): Promise<SessionSnapshot> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const roleCookie = cookieStore.get(ADMIN_ROLE_COOKIE)?.value;
  const isValidRole = ADMIN_ROLES.includes(roleCookie as AdminRole);

  return {
    isAuthenticated: sessionCookie === 'active' && isValidRole,
    role: isValidRole ? (roleCookie as AdminRole) : null
  };
}
