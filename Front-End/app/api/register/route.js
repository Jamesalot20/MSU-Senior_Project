import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';

export async function POST(request) {
    const body = await request.json();

    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            hashedPassword,
        },
    });

    return NextResponse.json(user);
}
