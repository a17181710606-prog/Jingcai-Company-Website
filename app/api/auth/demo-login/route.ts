import { NextResponse } from 'next/server';

import { ADMIN_ROLE_COOKIE, ADMIN_SESSION_COOKIE } from '@/lib/auth/constants';

export async function POST(request: Request) {
  const formData = await request.formData();
  const role = formData.get('role');
  const email = formData.get('email');

  const response = NextResponse.redirect(new URL('/admin', request.url));

  response.cookies.set(ADMIN_SESSION_COOKIE, 'active', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });
  response.cookies.set(ADMIN_ROLE_COOKIE, role === 'super_admin' ? 'super_admin' : 'admin', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });
  response.cookies.set('jc_admin_email', typeof email === 'string' ? email : 'admin@jingcai.local', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return response;
}
