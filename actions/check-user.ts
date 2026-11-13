"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function checkUser() {
    const clerkUser = await currentUser();
    if (!clerkUser) return null;

    const existing = await prisma.user.findUnique({
        where: { clerkId: clerkUser.id },
    });

    if (existing) return existing;
}