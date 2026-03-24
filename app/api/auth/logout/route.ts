import { NextResponse } from 'next/server';

import { ADMIN_ROLE_COOKIE, ADMIN_SESSION_COOKIE } from '@/lib/auth/constants';

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL('/admin/login', request.url));

  response.cookies.delete(ADMIN_SESSION_COOKIE);
  response.cookies.delete(ADMIN_ROLE_COOKIE);
  response.cookies.delete('jc_admin_email');

  return response;
}
