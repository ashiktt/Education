import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  const user = { login: true, role: "admin" };
  if (!user.login) {
    return NextResponse.redirect(new URL("/pages/auth", req.url));
  }

  if(user.role !== "admin") {
    return NextResponse.redirect(new URL("/pages/403", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/pages/admin/:path*", 
};
