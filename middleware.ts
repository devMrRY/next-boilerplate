import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookie: { name: string; value: string } | undefined =
    request.cookies.get("my-cookie");
  if (cookie?.value) {
    return NextResponse.rewrite(new URL("/dashboard", request.url));
  } else {
    // redirecting back to home page
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard"],
};
