"use server";

import { clerkClient } from "../lib/clerk-backend";


export const changeUserPasswordClerk = async (userId, password) => {
    try {
        await clerkClient.users.updateUser(userId, {
            password: password,
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}