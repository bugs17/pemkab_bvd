'use server'
import { clerkClient } from '../lib/clerk-backend';



export const CreateUserClerk = async ( role, firstName, lastName, username, password) => {
    if (!email || !role) {
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