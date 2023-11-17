import bcrypt from 'bcrypt';
import myUser from "@/app/actions/getUser";
import prisma from '../../../lib/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    const { userId } = params;
    const json = await request.json();
    const { email, password } = json;

    const currentUser = await myUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    if (!userId || typeof userId !== 'string') {
        throw new Error('Invalid Id');
    }

    const hashedPasswordUpdated = await bcrypt.hash(password, 12);
    const updated = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            email,
            hashedPassword: hashedPasswordUpdated
        }
    });

    return NextResponse.json(updated);
}
