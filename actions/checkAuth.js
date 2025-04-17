'use server'
import {  CreateSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function checkAuth() {
    const cookie = await cookies();
    const sessionCookies = cookie.get('appwrite-session');
    if(!sessionCookies){
        return{
            isAuthenticated : false
        }
    }
    try {
        const {account} = await CreateSessionClient(sessionCookies.value);
        const user = await account.get();
        console.log("Authenticated user:", user.name);
        return{
            isAuthenticated : true,
            id : user.$id,
            name : user.name,
            email : user.email
        }
    } catch (error) {
        return{
            isAuthenticated : false,
        }
        
    }
    
}
export default checkAuth