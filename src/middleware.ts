import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    // revisamos si el usuario tiene un token en las cookies
    const token = request.cookies.get('access_token');

    // Si no hay token, redirigimos a la página de login
    if (!token && request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si hay token, permitimos el acceso a la página
    return NextResponse.next();
}

export const config = {
    matcher: ['/','/dashboard/:path*'], // Rutas protegidas
};