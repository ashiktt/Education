import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const update = await req.json()
    try {
        const result = await prisma.teamMember.update({
            where: { id },
            data: {
                img: update.img,
                name: update.name,
                role: update.role
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}
// delete
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    try {
        const result = await prisma.teamMember.delete({
            where: { id },
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}