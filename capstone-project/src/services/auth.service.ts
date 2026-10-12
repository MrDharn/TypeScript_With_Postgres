import { passwordLength } from "../constant/const";
import { AppError } from "../error/error";
import { signAccessToken } from "../lib/jwt";
import { checkUserAvailability, createUser , checkEmailAvailabilityAndPassword} from "../repositories/user.repository";
import bcrypt from 'bcrypt'

export async function userRegistration(email: string, password: string):Promise<void> {
    if(!email || !password){
        throw new AppError(400, "Email and password are required!!")
    }

    if(password.length < passwordLength){
        throw new AppError(400, "Password must be greater than 6 characters")
    }

    const normalizeEmail = email.toLowerCase().trim()

    const existingUser = await checkUserAvailability(normalizeEmail)

    if(!existingUser){
        throw new AppError(409, "Email is already taken")
    }

    const passwordHashed = await bcrypt.hash(password, 10)

    await createUser(normalizeEmail, passwordHashed)


}


export async function userLogin(email: string, password:string): Promise<{accessToken: string}> {
       if(!email || !password){
            throw new AppError(400, "Email or password is empty");
        }

        const normalizeEmail = email.toLowerCase().trim()

        const isEmailExisting = await checkEmailAvailabilityAndPassword(normalizeEmail)

        if(!isEmailExisting?.password_hash){
            throw new AppError(404, 'Email or password is not correct')
        }
    const isPasswordValid = await bcrypt.compare(password, isEmailExisting.password_hash)
    if(!isPasswordValid){
        throw new AppError(400, 'Email or password is not correct')
    }


    const accessToken = signAccessToken({
        userId: isEmailExisting.id,
        email: isEmailExisting.email,
        role: isEmailExisting.role
    })

    return {accessToken}
}   