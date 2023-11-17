import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Check the correct path
import prisma from '../lib/prismadb'; // Check the correct path

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function myUser() {
    try {
        const session = await getSession();

        if (!session || !session.user || !session.user.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            }
        });

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
        };
    } catch (error) {
        throw new Error(error);
    }
}
