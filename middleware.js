import { NextResponse } from "next/server";
import checkAuth from "./actions/checkAuth";

export async function middleware(requst) {
  const {IsAuthenticated} = await checkAuth()
  

  if (!IsAuthenticated) {
    return NextResponse.redirect(new URL("/login", requst.Url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bookings"],
  // matcher: ["/bookings",'/room/add','/room/my-room'],
};
