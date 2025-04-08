import { NextResponse } from "next/server";

export async function middleware(requst) {
  const IsAuthenticated = false;

  if (!IsAuthenticated) {
    return NextResponse.redirect(new URL("/login", requst.Url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bookings"],
};
