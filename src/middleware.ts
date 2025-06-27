import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    // revisamos si el usuario tiene un token en las cookies
    const token = request.cookies.get('access_token');

    const { pathname } = request.nextUrl;

    // Excluir rutas públicas
    const publicPaths = ['/login'];

    if (publicPaths.includes(pathname)) {
        return NextResponse.next();
    }

    // Si no hay token, redirigimos a login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si hay token y está en la raíz, lo mandamos a /dashboard
    if (token && pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard/:path*', '/login'],
};