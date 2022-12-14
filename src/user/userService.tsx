import * as userRepository from './userRepository'
import bcrypt from 'bcrypt'

interface UserSession {
    userId: string,
    email: string,
}

export async function login(email: string, password: string) {
    const maybeUser = await userRepository.findByEmail(email, {
        select: {
            id: true,
            email: true,
            password: true,
        }
    })

    if (maybeUser !== null && maybeUser.password !== null) {
        const isLoginSuccess = await bcrypt.compare(password, maybeUser.password)
        if(isLoginSuccess) {
            const userSession: UserSession = {
                userId: maybeUser.id.toString(),
                email: maybeUser.email,
            }
            return {
                success: true as true,
                userSession
            }
        }
    }
    return {
        success: false as false,
        userSession: undefined,
    }
}