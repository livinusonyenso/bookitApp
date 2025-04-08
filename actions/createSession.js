'use server'

const creatSession = async(previousState,formData) =>{
    const email = formData.get('email')
    const password = formData.get('password')

    console.log(email,password)
    if(!email || !password) return {
        error : 'please fill out all filed'
    }

}

export default creatSession