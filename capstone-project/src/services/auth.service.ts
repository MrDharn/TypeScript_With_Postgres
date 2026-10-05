import { passwordLength } from "../constant/const";
import { AppError } from "../error/error";
import { checkUserAvailability, createUser } from "../repositories/user.repository";
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