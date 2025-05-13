'use server'
import { revalidatePath } from 'next/cache';
import { clerkClient } from '../lib/clerk-backend';



export const CreateUserClerk = async ( role, firstName, lastName, username, password) => {
    if (!firstName || !role || !lastName || !username || !password) {
        console.log("data tidak lengkap")
        return false
      }
      console.log("role", role)

    try {
        const invitation = await clerkClient.users.createUser({
          firstName: firstName,
          lastName: lastName,
          username:username,
          password: password,
          publicMetadata:{
            role: role,
          }
        });

        revalidatePath('/admin/settings-user/website')

          return {
            success: true,
            invitationId: invitation.id,
          };

    } catch (error) {
        console.error('Error saat mengirim undangan:', error);
        return {
        success: false,
        message: error.errors?.[0]?.message || error.message,
        };
    }
}