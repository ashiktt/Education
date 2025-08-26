import { prisma } from "@/app/Hook/Prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


// patch
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params
    const { update } = await req.json()
    console.log(update)
    try {
        const result = await prisma.appointment.update({
            where: { id },
            data: {
                name: update.name,
                email: update.email,
                phoneNumber: update.phoneNumber,
                coursesid: update.coursesid,
                complite: update.complite,
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
    console.log(id)
    try {
        const result = await prisma.appointment.delete({
            where: { id },
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}