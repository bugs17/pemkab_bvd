"use server";

import { revalidatePath } from "next/cache";
import { clerkClient } from "../lib/clerk-backend";

export const deleteUserClerk = async (userId) => {

    
    try {
        await clerkClient.users.deleteUser(userId)
        revalidatePath("/admin/settings-user/website")
        return true
    } catch (error) {
        console.log("Error saat menghapus user", error)
        return false
    }
}