import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/account", "/checkout", "/orders", "/wishlist"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  const pathname = request.nextUrl.pathname;

  const requiresAuth = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (requiresAuth && !token) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/account/:path*",
    "/checkout/:path*",
    "/orders/:path*",
    "/wishlist/:path*",
  ],
};
