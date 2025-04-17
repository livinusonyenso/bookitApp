'use server'

import { CreateSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

const destroySession = async () => {
  const cookieStore = cookies(); // ✅ get the cookie store
  const sessionCookie = cookieStore.get('appwrite-session'); // ✅ get session cookie by key

  if (!sessionCookie) {
    return {
      error: "No session cookie found"
    };
  }

  try {
    const { account } = await CreateSessionClient(sessionCookie.value); // ✅ pass session token
    await account.deleteSession('current'); // ✅ delete current user session

    cookieStore.delete('appwrite-session'); // ✅ remove the cookie

    return {
      success: true
    };
  } catch (error) {
    console.log("Session deletion error:", error); // good for debugging
    return {
      error: "Error deleting session"
    };
  }
};

export default destroySession;
