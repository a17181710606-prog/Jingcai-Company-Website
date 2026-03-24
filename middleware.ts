import { NextRequest, NextResponse } from 'next/server';

import { ADMIN_ROLE_COOKIE, ADMIN_SESSION_COOKIE } from '@/lib/auth/constants';

const PUBLIC_ADMIN_PATHS = ['/admin/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.get(ADMIN_SESSION_COOKIE)?.value === 'active';
  const role = request.cookies.get(ADMIN_ROLE_COOKIE)?.value;

  if (!hasSession || !role) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
