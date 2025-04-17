'use server'

import { CreateAdminClient } from "@/config/appwrite"
import { cookies } from "next/headers"

const creatSession = async(previousState,formData) =>{
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email,password)
    if(!email || !password) return {
        error : 'please fill out all filed'
    }

    //Get an account instance
    const {account} = await CreateAdminClient()


    //cookies
  
    try {
        const session = await account.createEmailPasswordSession(email,password)
        const cookieStore = await cookies();
        cookieStore.set('appwrite-session', session.secret, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          expires: new Date(session.expire),
          path: '/'
        });
           return {
            success : true
           }
        
    } catch (error) {
        console.log('Authentication error: ',error)
        return {
            error : "invalid credentials"
        }
        
    }

}

export default creatSession