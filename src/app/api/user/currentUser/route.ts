import { prisma } from "@/app/Hook/Prisma/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const user = await getServerSession()
        const data = await req.json()
        console.log(user)
        const result = await prisma.user.findFirst({
            where: {
                id: data.email,
                
            }
        })
        return NextResponse.json(result)
    } catch {
        return NextResponse.json("Something went wrong",);
    }
}