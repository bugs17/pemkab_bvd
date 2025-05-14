"use server";

import { revalidatePath } from "next/cache";
import { clerkClient } from "../lib/clerk-backend";


export const changeUserRoleClerk = async (userId, role) => {
    try {
        await clerkClient.users.updateUser(userId, {
            publicMetadata:{
                role:role
            }
        })
        revalidatePath('/admin/settings-user/website')
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}